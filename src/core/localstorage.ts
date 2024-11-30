export class LocalStorage {
  static get isAvailable() {
    return Boolean(window) && Boolean(window.localStorage)
  }

  static getObject<T extends object>(key: string, defaultValue?: T) {
    if (LocalStorage.isAvailable) {
      const value = localStorage.getItem(key)
      return value ? JSON.parse(value) : defaultValue
    }
    return defaultValue
  }

  static setObject<T extends object>(key: string, value: T) {
    if (LocalStorage.isAvailable) {
      localStorage.setItem(key, JSON.stringify(value))
    }
  }

  static getNumber(key: string, defaultValue: number) {
    if (LocalStorage.isAvailable) {
      const value = localStorage.getItem(key)
      return value ? Number(value) : defaultValue
    }
    return defaultValue
  }

  static setNumber(key: string, value: number) {
    if (LocalStorage.isAvailable) {
      localStorage.setItem(key, value.toString())
    }
  }

  static getBoolean(key: string, defaultValue: boolean) {
    if (LocalStorage.isAvailable) {
      const value = localStorage.getItem(key)
      return value ? Boolean(value) : defaultValue
    }
    return defaultValue
  }

  static setBoolean(key: string, value: boolean) {
    if (LocalStorage.isAvailable) {
      localStorage.setItem(key, value.toString())
    }
  }

  static getString(key: string, defaultValue?: string) {
    if (LocalStorage.isAvailable) {
      const value = localStorage.getItem(key)
      return value ? value : defaultValue
    }
    return defaultValue
  }

  static setString(key: string, value: string) {
    if (LocalStorage.isAvailable) {
      localStorage.setItem(key, value)
    }
  }

  static remove(key: string) {
    if (LocalStorage.isAvailable) {
      localStorage.removeItem(key)
    }
  }

  static removeAll() {
    if (LocalStorage.isAvailable) {
      localStorage.clear()
    }
  }
}
