# Understanding Access Modifiers in TypeScript OOP
**Introduction**\
When we work with Object-Oriented Programming (OOP) in TypeScript, we need to understand access modifiers properly. Because it's help us to control how our class properties and methods can be accessed from the different part or different place of our code. TypeScript provides us with three main access modifiers, and those are `public`, `private`, and `protected`. We also have `readonly`; we can use it if we want a property can't be modified, which means we can set its value only at declaration time.

**1. `public` Modifier:**
The `public` modifier means that if we use this modifier, we can access these properties and methods from anywhere. Actually, it's the default modifier in TypeScript. If we don't provide any modifier in front of any properties or methods in any class, it means it's the `public` modifier. But we can explicitly set the `public` modifier as well.

Example of `public` modifier:
```ts
class User {
  public firstName: string = "Jhon";
  lastName: string = "Doe"; // It's meas this is also a public modifier
}

const user = new User();
console.log(`${user.firstName} ${user.lastName}`); // Output: Jhon Doe

user.firstName = "Will"; // We can change the value from here also
user.lastName = "Smith"; // This is also ha write access

console.log(`${user.firstName} ${user.lastName}`); // Output: Will Smith
```
If you read above code you can easily understand what is the `public` modifier is.

**2. `private` Modifier:**
The `private` modifier means we can not access this property or method from outside of the class. We can modified the `private` property only from the same class.

Example of `private` modifier:
```ts
class User {
  private firstName: string = "Jhon";
  private lastName: string = "Doe";
}

const user = new User();
console.log(`${user.firstName}`); // Property 'firstName' is private and only accessible within class 'User'.
```
If you properly read this or write this code in your text editor you will see the error at text editor that Property 'firstName' is private and only accessible within class 'User'. That's mean it's not accessible from outside of the class.

**3. `protected` Modifier:**
The `protected` modifier is work almost like `private` but here have one difference. And the difference is that we can access it from It's subclasses.

Example of `private` modifier:
```ts
class User {
  protected firstName: string = "Jhon";
  protected lastName: string = "Doe";


  protected showFullName(): string{
    return `${this.firstName} ${this.lastName}`;
  }
}

class Students extends User {
   // We can access protected class from subclasses 
    displayFullName(): void {
        console.log(this.showFullName());
    }
}

const student = new Students();

student.displayFullName(); // Output: Jhon Doe
```

If we read above example you will understand that the `protected` modifier is accessible from existing class and also from subclasses. You can try this on your own text editor for better understanding. You can create a new object for User class and try to access showFullName method but it will show error in the text editor.

**4. `readonly` Modifier:**
The `readonly` modifier allows us to assign a value during declaration or inside the constructor, but we cannot change it afterwards.

Example of `readonly` modifier:
```ts
class User {
  readonly firstName: string = "Jhon";
  readonly lastName: string = "Doe";
  
  showFullName(): string{
    this.firstName = "Will"; // It will show "Cannot assign to 'firstName' because it is a read-only property." error in text editor

    return `${this.firstName} ${this.lastName}`;
  }
}
```

If you try above code in your text editor and if you try to change the value of firstName or lastName you will see Cannot assign to 'variableName' because it is a read-only property error in your text editor.

**Conclusion**\
Access modifiers help us write cleaner and more maintainable code by controlling access to class members. Personally, I use private for sensitive internal properties, protected when inheritance is needed, and readonly for values that should not change. Understanding when to use them makes working with OOP in TypeScript much easier.