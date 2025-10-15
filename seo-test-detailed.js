const puppeteer = require('puppeteer');
const chalk = require('chalk');

/**
 * Script detalhado de teste de SEO
 * Testa meta tags, Open Graph, Twitter Cards, Schema.org e mais
 */

async function testSEO(url) {
  console.log(chalk.blue.bold('\n🔍 Iniciando Teste Detalhado de SEO...\n'));
  console.log(chalk.gray(`URL: ${url}\n`));

  let browser;
  try {
    browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    console.log(chalk.yellow('⏳ Carregando página...'));
    await page.goto(url, { waitUntil: 'networkidle2' });
    console.log(chalk.green('✅ Página carregada!\n'));

    // ==================== META TAGS BÁSICAS ====================
    console.log(chalk.blue.bold('📄 META TAGS BÁSICAS'));
    console.log(chalk.gray('─'.repeat(60)));

    const title = await page.title();
    const metaDescription = await page
      .$eval('meta[name="description"]', (el) => el.content)
      .catch(() => null);
    const metaKeywords = await page
      .$eval('meta[name="keywords"]', (el) => el.content)
      .catch(() => null);
    const canonical = await page.$eval('link[rel="canonical"]', (el) => el.href).catch(() => null);

    printResult('Title', title, title && title.length >= 50 && title.length <= 60);
    console.log(chalk.gray(`  Tamanho: ${title.length} caracteres (ideal: 50-60)`));

    printResult(
      'Meta Description',
      metaDescription,
      metaDescription && metaDescription.length >= 150 && metaDescription.length <= 160
    );
    if (metaDescription) {
      console.log(chalk.gray(`  Tamanho: ${metaDescription.length} caracteres (ideal: 150-160)`));
    }

    printResult('Meta Keywords', metaKeywords, !!metaKeywords);
    printResult('Canonical URL', canonical, !!canonical);

    // ==================== OPEN GRAPH ====================
    console.log(chalk.blue.bold('\n📱 OPEN GRAPH (Facebook, LinkedIn)'));
    console.log(chalk.gray('─'.repeat(60)));

    const ogTags = {
      title: await getMetaContent(page, 'og:title'),
      description: await getMetaContent(page, 'og:description'),
      image: await getMetaContent(page, 'og:image'),
      url: await getMetaContent(page, 'og:url'),
      type: await getMetaContent(page, 'og:type'),
    };

    printResult('og:title', ogTags.title, !!ogTags.title);
    printResult('og:description', ogTags.description, !!ogTags.description);
    printResult('og:image', ogTags.image, !!ogTags.image);
    printResult('og:url', ogTags.url, !!ogTags.url);
    printResult('og:type', ogTags.type, !!ogTags.type);

    // ==================== TWITTER CARDS ====================
    console.log(chalk.blue.bold('\n🐦 TWITTER CARDS'));
    console.log(chalk.gray('─'.repeat(60)));

    const twitterTags = {
      card: await getMetaContent(page, 'twitter:card'),
      title: await getMetaContent(page, 'twitter:title'),
      description: await getMetaContent(page, 'twitter:description'),
      image: await getMetaContent(page, 'twitter:image'),
    };

    printResult('twitter:card', twitterTags.card, !!twitterTags.card);
    printResult('twitter:title', twitterTags.title, !!twitterTags.title);
    printResult('twitter:description', twitterTags.description, !!twitterTags.description);
    printResult('twitter:image', twitterTags.image, !!twitterTags.image);

    // ==================== SCHEMA.ORG ====================
    console.log(chalk.blue.bold('\n🏗️  SCHEMA.ORG (Dados Estruturados)'));
    console.log(chalk.gray('─'.repeat(60)));

    const schemaScripts = await page.$$eval('script[type="application/ld+json"]', (scripts) =>
      scripts
        .map((s) => {
          try {
            return JSON.parse(s.textContent);
          } catch {
            return null;
          }
        })
        .filter(Boolean)
    );

    if (schemaScripts.length > 0) {
      console.log(chalk.green(`✅ ${schemaScripts.length} schema(s) encontrado(s)`));
      schemaScripts.forEach((schema, index) => {
        console.log(chalk.cyan(`\n  Schema ${index + 1}:`));
        console.log(chalk.gray(`    @type: ${schema['@type']}`));
        if (schema.name) console.log(chalk.gray(`    name: ${schema.name}`));
        if (schema.jobTitle) console.log(chalk.gray(`    jobTitle: ${schema.jobTitle}`));
      });
    } else {
      console.log(chalk.red('❌ Nenhum schema encontrado'));
    }

    // ==================== HEADINGS ====================
    console.log(chalk.blue.bold('\n📋 ESTRUTURA DE HEADINGS'));
    console.log(chalk.gray('─'.repeat(60)));

    const headings = await page.evaluate(() => {
      const h1s = Array.from(document.querySelectorAll('h1')).map((h) => h.textContent.trim());
      const h2s = Array.from(document.querySelectorAll('h2')).map((h) => h.textContent.trim());
      return { h1s, h2s: h2s.slice(0, 5) }; // Primeiros 5 h2s
    });

    printResult('H1 Tags', `${headings.h1s.length} encontrado(s)`, headings.h1s.length === 1);
    if (headings.h1s.length > 0) {
      headings.h1s.forEach((h1) => {
        console.log(chalk.gray(`    "${h1.substring(0, 80)}${h1.length > 80 ? '...' : ''}"`));
      });
    }

    if (headings.h1s.length > 1) {
      console.log(chalk.yellow('  ⚠️  Idealmente, deve haver apenas 1 H1 por página'));
    }

    // ==================== IMAGENS ====================
    console.log(chalk.blue.bold('\n🖼️  IMAGENS'));
    console.log(chalk.gray('─'.repeat(60)));

    const images = await page.evaluate(() => {
      const imgs = Array.from(document.querySelectorAll('img'));
      return {
        total: imgs.length,
        withoutAlt: imgs.filter((img) => !img.alt).length,
      };
    });

    printResult('Total de Imagens', images.total, images.total > 0);
    printResult('Imagens sem ALT', images.withoutAlt, images.withoutAlt === 0);

    if (images.withoutAlt > 0) {
      console.log(
        chalk.yellow(
          `  ⚠️  ${images.withoutAlt} imagem(ns) sem atributo alt (ruim para SEO e acessibilidade)`
        )
      );
    }

    // ==================== PERFORMANCE ====================
    console.log(chalk.blue.bold('\n⚡ PERFORMANCE BÁSICA'));
    console.log(chalk.gray('─'.repeat(60)));

    const performance = await page.evaluate(() => {
      const perf = window.performance.timing;
      return {
        loadTime: perf.loadEventEnd - perf.navigationStart,
        domContentLoaded: perf.domContentLoadedEventEnd - perf.navigationStart,
      };
    });

    console.log(chalk.cyan(`  Tempo de carregamento: ${performance.loadTime}ms`));
    console.log(chalk.cyan(`  DOM Content Loaded: ${performance.domContentLoaded}ms`));

    if (performance.loadTime < 3000) {
      console.log(chalk.green('  ✅ Tempo de carregamento excelente!'));
    } else if (performance.loadTime < 5000) {
      console.log(chalk.yellow('  ⚠️  Tempo de carregamento aceitável'));
    } else {
      console.log(chalk.red('  ❌ Tempo de carregamento lento (otimize!)'));
    }

    // ==================== MOBILE-FRIENDLY ====================
    console.log(chalk.blue.bold('\n📱 RESPONSIVIDADE'));
    console.log(chalk.gray('─'.repeat(60)));

    const viewport = await page
      .$eval('meta[name="viewport"]', (el) => el.content)
      .catch(() => null);

    printResult('Viewport Meta Tag', viewport, !!viewport);
    if (viewport && viewport.includes('width=device-width')) {
      console.log(chalk.green('  ✅ Configurado para mobile'));
    }

    // ==================== RESUMO FINAL ====================
    console.log(chalk.blue.bold('\n📊 RESUMO FINAL'));
    console.log(chalk.gray('═'.repeat(60)));

    const scores = {
      metaTags: [title, metaDescription, metaKeywords, canonical].filter(Boolean).length,
      openGraph: Object.values(ogTags).filter(Boolean).length,
      twitter: Object.values(twitterTags).filter(Boolean).length,
      schema: schemaScripts.length,
    };

    const totalScore =
      (scores.metaTags / 4) * 25 +
      (scores.openGraph / 5) * 25 +
      (scores.twitter / 4) * 25 +
      (scores.schema > 0 ? 25 : 0);

    console.log(chalk.cyan(`  Meta Tags: ${scores.metaTags}/4`));
    console.log(chalk.cyan(`  Open Graph: ${scores.openGraph}/5`));
    console.log(chalk.cyan(`  Twitter Cards: ${scores.twitter}/4`));
    console.log(chalk.cyan(`  Schema.org: ${scores.schema > 0 ? '✅' : '❌'}`));

    console.log(chalk.gray('─'.repeat(60)));

    if (totalScore >= 90) {
      console.log(chalk.green.bold(`\n🎉 SCORE SEO: ${Math.round(totalScore)}/100 - EXCELENTE!\n`));
    } else if (totalScore >= 70) {
      console.log(
        chalk.yellow.bold(`\n⚠️  SCORE SEO: ${Math.round(totalScore)}/100 - BOM (pode melhorar)\n`)
      );
    } else {
      console.log(
        chalk.red.bold(`\n❌ SCORE SEO: ${Math.round(totalScore)}/100 - PRECISA MELHORIAS\n`)
      );
    }

    // ==================== RECOMENDAÇÕES ====================
    console.log(chalk.blue.bold('💡 RECOMENDAÇÕES'));
    console.log(chalk.gray('─'.repeat(60)));

    const recommendations = [];

    if (!title || title.length < 50 || title.length > 60) {
      recommendations.push('Ajuste o título para ter entre 50-60 caracteres');
    }
    if (!metaDescription || metaDescription.length < 150 || metaDescription.length > 160) {
      recommendations.push('Ajuste a meta description para ter entre 150-160 caracteres');
    }
    if (scores.openGraph < 5) {
      recommendations.push('Complete todas as Open Graph tags para melhor compartilhamento');
    }
    if (scores.twitter < 4) {
      recommendations.push('Complete todas as Twitter Card tags');
    }
    if (headings.h1s.length !== 1) {
      recommendations.push('Use exatamente 1 tag H1 por página');
    }
    if (images.withoutAlt > 0) {
      recommendations.push('Adicione atributo alt em todas as imagens');
    }

    if (recommendations.length === 0) {
      console.log(chalk.green('  ✅ Tudo perfeito! Nenhuma recomendação no momento.\n'));
    } else {
      recommendations.forEach((rec, i) => {
        console.log(chalk.yellow(`  ${i + 1}. ${rec}`));
      });
      console.log();
    }
  } catch (error) {
    console.error(chalk.red('\n❌ Erro ao executar teste:'), error.message);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

// Funções auxiliares
async function getMetaContent(page, property) {
  return await page
    .$eval(`meta[property="${property}"], meta[name="${property}"]`, (el) => el.content)
    .catch(() => null);
}

function printResult(label, value, isGood) {
  const icon = value ? (isGood ? '✅' : '⚠️ ') : '❌';
  const color = value ? (isGood ? chalk.green : chalk.yellow) : chalk.red;
  const displayValue = value || 'Não encontrado';

  console.log(color(`${icon} ${label}:`));
  if (value && typeof value === 'string' && value.length > 80) {
    console.log(chalk.gray(`    ${displayValue.substring(0, 77)}...`));
  } else if (value) {
    console.log(chalk.gray(`    ${displayValue}`));
  }
}

// Executar
const url = process.argv[2] || 'http://localhost:3002/professional';
testSEO(url);
