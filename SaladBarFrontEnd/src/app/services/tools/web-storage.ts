export class WebStorage {

  // Write a method to store a value in local storage
  public static set(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  // Write a method to get a value from local storage
  public static get(key: string): any| null {

    const result = localStorage.getItem(key);
    if(result) {
      return JSON.parse(result);
    }
    return null;
  }

  // Write a method to remove a value from local storage
  public static remove(key: string): void {
    localStorage.removeItem(key);
  }

  // Write a method to clear local storage
  public static clear(): void {
    localStorage.clear();
  }

  // Write a method to get the length of local storage
  public static count(): number {
    return localStorage.length;
  }

  // Write a method to get a key from local storage
  public static key(index: number): string|null {
    const result = localStorage.key(index);
    if(result) {
      return JSON.parse(result);
    }
    return null;
  }

}
