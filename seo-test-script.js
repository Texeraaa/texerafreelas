// SEO Test Script - Execute no console do navegador
// Copie e cole este código no DevTools (F12 > Console)

console.log('🔍 INICIANDO TESTES DE SEO...\n');

// 1. Testar Meta Tags
console.log('📋 META TAGS:');
const title = document.title;
const description = document.querySelector('meta[name="description"]')?.content;
const keywords = document.querySelector('meta[name="keywords"]')?.content;

console.log(`Title: ${title} (${title.length} chars)`);
console.log(`Description: ${description} (${description?.length} chars)`);
console.log(`Keywords: ${keywords}`);

// Validações
if (title.length < 30 || title.length > 60) {
  console.warn('⚠️ Title muito curto (<30) ou longo (>60)');
} else {
  console.log('✅ Title com tamanho adequado');
}

if (!description || description.length < 120 || description.length > 160) {
  console.warn('⚠️ Description deve ter entre 120-160 caracteres');
} else {
  console.log('✅ Description com tamanho adequado');
}

// 2. Testar Open Graph
console.log('\n📱 OPEN GRAPH:');
const ogTitle = document.querySelector('meta[property="og:title"]')?.content;
const ogDescription = document.querySelector('meta[property="og:description"]')?.content;
const ogImage = document.querySelector('meta[property="og:image"]')?.content;
const ogUrl = document.querySelector('meta[property="og:url"]')?.content;

console.log(`OG Title: ${ogTitle}`);
console.log(`OG Description: ${ogDescription}`);
console.log(`OG Image: ${ogImage}`);
console.log(`OG URL: ${ogUrl}`);

// 3. Testar Schema.org
console.log('\n🏗️ SCHEMA.ORG:');
const schemas = document.querySelectorAll('script[type="application/ld+json"]');
console.log(`Encontrados ${schemas.length} schemas:`);

schemas.forEach((schema, index) => {
  try {
    const data = JSON.parse(schema.innerHTML);
    console.log(`Schema ${index + 1}: ${data['@type']}`);
    console.log(data);
  } catch (e) {
    console.error(`❌ Erro no schema ${index + 1}:`, e);
  }
});

// 4. Testar Headers Semânticos
console.log('\n📝 ESTRUTURA DE HEADERS:');
const headers = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
const headerStructure = {};

headers.forEach((header) => {
  const tag = header.tagName.toLowerCase();
  headerStructure[tag] = (headerStructure[tag] || 0) + 1;
});

console.log('Estrutura de headers:', headerStructure);

const h1Count = headerStructure.h1 || 0;
if (h1Count === 0) {
  console.warn('⚠️ Nenhum H1 encontrado');
} else if (h1Count > 1) {
  console.warn('⚠️ Múltiplos H1 encontrados');
} else {
  console.log('✅ Estrutura de H1 adequada');
}

// 5. Testar Imagens
console.log('\n🖼️ IMAGENS:');
const images = document.querySelectorAll('img');
let imagesWithoutAlt = 0;

images.forEach((img) => {
  if (!img.alt || img.alt.trim() === '') {
    imagesWithoutAlt++;
  }
});

console.log(`Total de imagens: ${images.length}`);
console.log(`Imagens sem alt: ${imagesWithoutAlt}`);

if (imagesWithoutAlt > 0) {
  console.warn(`⚠️ ${imagesWithoutAlt} imagens sem alt text`);
} else {
  console.log('✅ Todas as imagens têm alt text');
}

// 6. Testar Links
console.log('\n🔗 LINKS:');
const externalLinks = document.querySelectorAll(
  'a[href^="http"]:not([href*="' + window.location.hostname + '"])'
);
let linksWithoutNoopener = 0;

externalLinks.forEach((link) => {
  if (!link.rel.includes('noopener')) {
    linksWithoutNoopener++;
  }
});

console.log(`Links externos: ${externalLinks.length}`);
console.log(`Links sem noopener: ${linksWithoutNoopener}`);

// 7. Performance Básica
console.log('\n⚡ PERFORMANCE BÁSICA:');
console.log(`Tempo de carregamento: ${performance.now()}ms`);

// 8. Resumo
console.log('\n📊 RESUMO DOS TESTES:');
console.log('1. ✅ Execute este script nas duas versões (/ e /professional)');
console.log('2. ✅ Teste as ferramentas online mencionadas');
console.log('3. ✅ Verifique o Google Search Console após deploy');
console.log('4. ✅ Monitore Core Web Vitals');

console.log('\n🎉 TESTES CONCLUÍDOS!');
