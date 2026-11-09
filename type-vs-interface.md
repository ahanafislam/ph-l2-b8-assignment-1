# Type Alias vs Interface in TypeScript: What's the Difference and When to Use Them?

**Introduction**
When we use TypeScript, sometimes we confushed about what should we use Interface or Type Alias. The main reason is that the type and interface both look the same, but they have some differences. At this blog post, I’m talking about what the difference between them and what should we use and when should we use.

**Understanding the Difference**
At first I want to show there syntax with example. At first let, we want to create a Object type for student. We need our Student object should have id as `string` , name as `string`, roll as `number`, subjects as `array of string`. Below I'm showing how can we write it with `type` vs `interface`

*Using Type Alias*
```ts
type Student = {
	id: string;
	name: string;
	roll: number;
	subjects: string[];
}
```

*Using Interface*
```ts
interface Student {
	id: string;
	name: string;
	roll: number;
	subjects: string[];
}
```

If we see the syntax not too much difference, right? If you see the below code you can  understand  the difference.

*First I will show the example for `interface` below:*
```ts
interface Student {
	id: string;
	name: string;
}

interface Student {
	roll: number;
}

interface Student {
	subjects: string[];
}
```

If we above example we can understand that with `interface` it will contains app properties. But we can't do this same thing if we use `type` alias. If will show error We can see the example below,

```ts
type Student = {
	id: string;
	name: string;
}

type Student = {
	roll: number;
} //  It will show a Duplicate identifier 'Student' error in the text editor.
```

This will display error to the text editor and it's not possible if we use `type` alias. But we can do below thing with `type` alias but not with `interface`.

```ts
type Status = "success" | "error" | "loading";
type ID = string | number;
```
Now you understand the difference between them.

**When should we choose one over the other?**
Experts says they prefer using `interfaces` when we need to work with object structures, especially for API responses or class contracts. On the other hand, when we need to working with union types or more complex type combinations we need to choose `type` alias.  
  
  
**Conclusion**  
In the conclusion I will say you that It will be safer If we use `interface` for objects. I personally use this also. When it's not possible with `interface` I use `type` like union, tuple etc.