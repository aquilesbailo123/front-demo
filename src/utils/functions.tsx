
export function formatNumber(value: number | string): string {
      const parsedNum = typeof value === 'string' ? parseFloat(value) : value;
      return parsedNum.toLocaleString('en-US');
    }
    