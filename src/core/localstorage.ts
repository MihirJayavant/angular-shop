export class LocalStorage {
  static get isAvailable() {
    return !!window && !!window.localStorage
  }

  getObject<T extends object>(key: string, defaultValue?: T) {
    if (LocalStorage.isAvailable) {
      const value = localStorage.getItem(key)
      return !!value ? JSON.parse(value) : defaultValue
    }
    return defaultValue
  }

  setObject<T extends object>(key: string, value: T) {
    if (LocalStorage.isAvailable) {
      localStorage.setItem(key, JSON.stringify(value))
    }
  }

  getNumber(key: string, defaultValue: number) {
    if (LocalStorage.isAvailable) {
      const value = localStorage.getItem(key)
      return !!value ? Number(value) : defaultValue
    }
    return defaultValue
  }

  setNumber(key: string, value: number) {
    if (LocalStorage.isAvailable) {
      localStorage.setItem(key, value.toString())
    }
  }

  getBoolean(key: string, defaultValue: boolean) {
    if (LocalStorage.isAvailable) {
      const value = localStorage.getItem(key)
      return !!value ? Boolean(value) : defaultValue
    }
    return defaultValue
  }

  setBoolean(key: string, value: boolean) {
    if (LocalStorage.isAvailable) {
      localStorage.setItem(key, value.toString())
    }
  }

  getString(key: string, defaultValue?: string) {
    if (LocalStorage.isAvailable) {
      const value = localStorage.getItem(key)
      return !!value ? value : defaultValue
    }
    return defaultValue
  }

  setString(key: string, value: string) {
    if (LocalStorage.isAvailable) {
      localStorage.setItem(key, value)
    }
  }

  remove(key: string) {
    if (LocalStorage.isAvailable) {
      localStorage.removeItem(key)
    }
  }

  removeAll() {
    if (LocalStorage.isAvailable) {
      localStorage.clear()
    }
  }
}
