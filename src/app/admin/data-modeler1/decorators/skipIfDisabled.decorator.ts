export const skipIfDisabled = (target: any, propertyKey: string, descriptor: PropertyDescriptor)=> {
    const originalMethod = descriptor.value;
    
    descriptor.value = function(...args: any[]) {
      if (!this.columnResizeEnabled) return;
      return originalMethod.apply(this, args);
    };
    
    return descriptor;
  }