function logMethod(target: any, propertyName: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      console.log(`Llamando ${propertyName} con argumentos: ${args}`);
      return originalMethod.apply(this, args);
    };
  }
  
  class Calculadora {
    @logMethod
    suma(a: number, b: number): number {
      console.log(a + b);
      return a + b;
    }
  }

  const calc = new Calculadora();
  calc.suma(1, 2); // Llamando suma con argumentos: 1,2
