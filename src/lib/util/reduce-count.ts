export const reduceCount = <T>(objects: T[], by: string) => {
  return objects.reduce((acc, curr) => {
    const key = curr[by];
    const count = acc[key] || 0;
    return {
      ...acc,
      [key]: count + 1,
    }
  }, {} as Record<string, number>);
}