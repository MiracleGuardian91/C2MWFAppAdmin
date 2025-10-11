 /** Convert DMO Name to guid */
 export const nameToGuid = (name: string) => name
  ?.replaceAll(/[^\w]|_/g, '') // remove everything except for alphanumeric chars
  ?.toLowerCase();