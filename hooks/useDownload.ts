import { useCallback } from 'react';

export const useDownload = () => {
  const downloadFile = useCallback((url: string, filename?: string) => {
    const link = document.createElement('a');
    link.href = url;
    if (filename) {
      link.download = filename;
    }
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return { downloadFile };
};
