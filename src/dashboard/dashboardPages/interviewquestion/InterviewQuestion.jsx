import React, { useEffect, useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  BookOpen,
  Code,
  Users,
  Award,
} from "lucide-react";
import { div } from "framer-motion/client";

const LOCAL_STORAGE_KEY = "oop_interview_completed";
const InterviewQuestion = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const [completedQuestions, setCompletedQuestions] = useState(new Set());

  useEffect(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setCompletedQuestions(new Set(parsed));
      } catch (e) {
        console.error("Failed to parse localStorage data", e);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify([...completedQuestions])
    );
  }, [completedQuestions]);

  const questions = [
    {
      id: 1,
      question: "What is OOP (Object-Oriented Programming)?",
      answer:
        'OOP is a programming paradigm based on the concept of "objects", which can contain data in the form of fields (attributes) and code in the form of procedures (methods). It emphasizes modularity and reusability.',
      category: "Fundamentals",
    },
    {
      id: 2,
      question: "What are the main principles of OOP?",
      answer:
        "The main principles of OOP are encapsulation, inheritance, and polymorphism.",
      category: "Principles",
    },
    {
      id: 3,
      question: "What is encapsulation?",
      answer:
        "Encapsulation is the mechanism that binds together the data and functions that manipulate the data, and keeps both safe from outside interference and misuse.",
      category: "Principles",
    },
    {
      id: 4,
      question: "What is inheritance?",
      answer:
        "Inheritance is the mechanism where a new class is derived from an existing class, inheriting its properties and behaviors.",
      category: "Principles",
    },
    {
      id: 5,
      question: "What is polymorphism?",
      answer:
        "Polymorphism is the ability of a single function or method to operate on different types of data.",
      category: "Principles",
    },
    {
      id: 6,
      question: "What is a class?",
      answer:
        "A class is a blueprint for creating objects in OOP. It defines the properties (attributes) and behaviors (methods) that objects of the class will have.",
      category: "Core Concepts",
    },
    {
      id: 7,
      question: "What is an object?",
      answer:
        "An object is an instance of a class. It represents a specific instance of data and behaviors defined by its class.",
      category: "Core Concepts",
    },
    {
      id: 8,
      question: "What is method overloading?",
      answer:
        "Method overloading is a feature that allows a class to have multiple methods with the same name but different parameters.",
      category: "Methods",
    },
    {
      id: 9,
      question: "What is method overriding?",
      answer:
        "Method overriding is a feature that allows a subclass to provide a specific implementation of a method that is already defined in its superclass.",
      category: "Methods",
    },
    {
      id: 10,
      question: "What is the difference between abstraction and encapsulation?",
      answer:
        "Abstraction is the process of hiding the complex implementation details and showing only the essential features of an object. Encapsulation, on the other hand, is the process of bundling the data (attributes) and methods (behaviors) that operate on the data into a single unit.",
      category: "Principles",
    },
    {
      id: 11,
      question: "What is the difference between a class and an object?",
      answer:
        "A class is a blueprint for creating objects, while an object is an instance of a class.",
      category: "Core Concepts",
    },
    {
      id: 12,
      question: "What is a constructor in Java?",
      answer:
        "A constructor is a special type of method that is automatically called when an object is created. It is used to initialize the object's state.",
      category: "Java Specifics",
    },
    {
      id: 13,
      question:
        "What is the difference between a default constructor and a parameterized constructor?",
      answer:
        "A default constructor is a constructor with no parameters, whereas a parameterized constructor accepts one or more parameters to initialize the object with specific values.",
      category: "Java Specifics",
    },
    {
      id: 14,
      question: "What is this keyword in Java?",
      answer:
        "This keyword refers to the current instance of the class. It is used to differentiate between instance variables and parameters with the same name and to invoke current class methods and constructors.",
      category: "Java Specifics",
    },
    {
      id: 15,
      question: "What is method overloading?",
      answer:
        "Method overloading is a feature that allows a class to have multiple methods with the same name but different parameters. The compiler determines which method to call based on the number and types of arguments passed.",
      category: "Methods",
    },
    {
      id: 16,
      question: "What is method overriding?",
      answer:
        "Method overriding is a feature that allows a subclass to provide a specific implementation of a method that is already defined in its superclass. It is used for achieving runtime polymorphism.",
      category: "Methods",
    },
    {
      id: 17,
      question: "What is the super keyword in Java?",
      answer:
        "The super keyword is used to refer to the superclass of the current object. It can be used to call superclass methods, access superclass constructors, and access superclass variables.",
      category: "Java Specifics",
    },
    {
      id: 18,
      question: "What is inheritance in Java?",
      answer:
        "Inheritance is the mechanism where a new class (subclass) is derived from an existing class (superclass), inheriting its properties and behaviors. It promotes code reusability and enables hierarchical relationships between classes.",
      category: "Principles",
    },
    {
      id: 19,
      question: "What is the difference between composition and inheritance?",
      answer:
        "Composition involves creating complex objects by combining simpler ones, while inheritance involves creating new classes based on existing ones. Composition promotes code reuse through object composition, while inheritance promotes reuse through class extension.",
      category: "Design Patterns",
    },
    {
      id: 20,
      question: "What is polymorphism in Java?",
      answer:
        "Polymorphism is the ability of a single method or function to operate on different types of data. In Java, polymorphism can be achieved through method overloading and method overriding.",
      category: "Principles",
    },
    {
      id: 21,
      question: "What is method hiding in Java?",
      answer:
        "Method hiding occurs when a static method in a subclass has the same signature as a static method in the superclass. In this case, the subclass method hides the superclass method rather than overriding it.",
      category: "Advanced",
    },
    {
      id: 22,
      question: "What is an abstraction in Java?",
      answer:
        "Abstraction is the process of hiding the implementation details and showing only the essential features of an object. It is achieved in Java through abstract classes and interfaces.",
      category: "Principles",
    },
    {
      id: 23,
      question: "What is an abstract class in Java?",
      answer:
        "An abstract class is a class that cannot be instantiated and may contain one or more abstract methods. Abstract classes can have both abstract and concrete methods.",
      category: "Advanced",
    },
    {
      id: 24,
      question: "What is an interface in Java?",
      answer:
        "An interface in Java is a reference type that can contain only abstract methods, default methods, static methods, and constant variables. It is used to achieve abstraction and multiple inheritance in Java.",
      category: "Advanced",
    },
    {
      id: 25,
      question: "What is multiple inheritance, and does Java support it?",
      answer:
        "Multiple inheritance refers to a feature where a class can inherit properties and behaviors from multiple parent classes. Java does not support multiple inheritance for classes but supports it through interfaces.",
      category: "Advanced",
    },
    {
      id: 26,
      question: "What is a package in Java?",
      answer:
        "A package in Java is a mechanism for organizing classes and interfaces into namespaces. It helps in avoiding naming conflicts and provides access protection.",
      category: "Java Specifics",
    },
    {
      id: 27,
      question: "What is constructor chaining?",
      answer:
        "Constructor chaining is the process of calling one constructor from another constructor within the same class or in the superclass using the this() or super() keyword.",
      category: "Advanced",
    },
    {
      id: 28,
      question: "What is the final keyword in Java?",
      answer:
        "The final keyword in Java is used to restrict the user from changing the value of a variable, overriding a method, or inheriting from a class. It makes the entity immutable or unchangeable.",
      category: "Java Specifics",
    },
    {
      id: 29,
      question: "What is the static keyword in Java?",
      answer:
        "The static keyword in Java is used to create variables and methods that belong to the class rather than to instances of the class. Static members are shared among all instances of the class.",
      category: "Java Specifics",
    },
    {
      id: 30,
      question:
        "What is the difference between == and .equals() method in Java?",
      answer:
        "The == operator in Java checks for reference equality, i.e., whether two references point to the same object. The .equals() method, on the other hand, checks for content equality, i.e., whether two objects have the same content or value.",
      category: "Java Specifics",
    },
    {
      id: 31,
      question:
        "What is the difference between method overloading and method overriding?",
      answer:
        "Method overloading occurs within the same class where methods have the same name but different parameters. Method overriding occurs in subclasses where a method with the same signature as a method in the superclass provides a specific implementation.",
      category: "Methods",
    },
    {
      id: 32,
      question: "What is a static block in Java?",
      answer:
        "A static block in Java is a block of code enclosed in curly braces `{}` and preceded by the `static` keyword. It is executed when the class is loaded into memory, typically used for static initialization of variables.",
      category: "Java Specifics",
    },
    {
      id: 33,
      question: "What is a final class in Java?",
      answer:
        "A final class in Java is a class that cannot be subclassed. It prevents inheritance and modification of its behavior, providing stability and security in certain scenarios.",
      category: "Java Specifics",
    },
    {
      id: 34,
      question: "What is the final method in Java?",
      answer:
        "A final method in Java is a method that cannot be overridden by subclasses. It ensures that the method’s implementation remains unchanged, promoting code predictability and security.",
      category: "Java Specifics",
    },
    {
      id: 35,
      question: "What are method hiding and method overriding?",
      answer:
        "Method hiding occurs when a subclass defines a static method with the same signature as a static method in the superclass, effectively hiding the superclass method. Method overriding occurs when a subclass provides a specific implementation of a method defined in the superclass.",
      category: "Advanced",
    },
    {
      id: 36,
      question: "What are method overloading and method overriding?",
      answer:
        "Method overloading involves defining multiple methods in a class with the same name but different parameters. Method overriding involves providing a specific implementation of a method in a subclass that is already defined in its superclass.",
      category: "Methods",
    },
    {
      id: 37,
      question: "What is dynamic method dispatch in Java?",
      answer:
        "Dynamic method dispatch is a mechanism in Java where the method to be invoked is determined at runtime based on the object being referred to by the reference variable. It enables polymorphic behavior in Java.",
      category: "Advanced",
    },
    {
      id: 38,
      question: "What is the instance of an operator in Java?",
      answer:
        "The `instanceof` operator in Java is used to test whether an object is an instance of a particular class or interface. It returns true if the object is an instance of the specified type or a subtype; otherwise, it returns false.",
      category: "Java Specifics",
    },
    {
      id: 39,
      question: "What is method chaining in Java?",
      answer:
        "Method chaining, also known as fluent interface, is a design pattern where multiple methods are called sequentially in a single statement. Each method returns an object on which the next method is called, leading to a concise and readable code style.",
      category: "Design Patterns",
    },
    {
      id: 40,
      question:
        "What is the difference between abstract class and interface in Java?",
      answer:
        "Abstract classes can have both abstract and concrete methods, while interfaces can only have abstract methods (until Java 8+, which also allows default and static methods). A class can implement multiple interfaces but can extend only one abstract class.",
      category: "Advanced",
    },
    {
      id: 41,
      question: "What is a method signature in Java?",
      answer:
        "Method signature consists of the method name and its parameter list. It does not include the return type of the method. Method overloading is based on differences in method signatures.",
      category: "Methods",
    },
    {
      id: 42,
      question:
        "What is the difference between a shallow copy and a deep copy?",
      answer:
        "Shallow copy creates a new object and then copies the references of the original object's fields into the new object. Deep copy creates a new object and then recursively copies the contents of the original object's fields into the new object.",
      category: "Core Concepts",
    },
    {
      id: 43,
      question: "What is a singleton class in Java?",
      answer:
        "A singleton class in Java is a class that allows only one instance of itself to be created and provides a global point of access to that instance. It is typically implemented by making the constructor private and providing a static method to return the instance.",
      category: "Design Patterns",
    },
    {
      id: 44,
      question: "What is the purpose of the transient keyword in Java?",
      answer:
        "The transient keyword is used to indicate that a field should not be serialized when the object is serialized. It is often used for fields that should not be persisted, such as passwords or temporary data.",
      category: "Java Specifics",
    },
    {
      id: 45,
      question: "What is the purpose of the volatile keyword in Java?",
      answer:
        "The volatile keyword in Java is used to indicate that a variable's value may be modified by multiple threads asynchronously. It ensures that changes made by one thread are visible to other threads immediately, preventing stale reads.",
      category: "Java Specifics",
    },
    {
      id: 46,
      question:
        "What is the difference between ArrayList and LinkedList in Java?",
      answer:
        "ArrayList is implemented as a resizable array, allowing fast random access but slower insertion and deletion of elements. LinkedList is implemented as a doubly linked list, allowing fast insertion and deletion but slower random access.",
      category: "Collections",
    },
    {
      id: 47,
      question: "What is the difference between HashMap and HashTable in Java?",
      answer:
        "Both HashMap and HashTable are used to store key-value pairs, but HashMap is not synchronized and allows null keys and values, while HashTable is synchronized and does not allow null keys or values.",
      category: "Collections",
    },
    {
      id: 48,
      question:
        "What is the difference between == and equals() method for comparing objects?",
      answer:
        "The == operator compares object references for equality, checking if two references point to the same object. The equals() method compares the contents of objects for equality, which can be overridden to define custom equality.",
      category: "Java Specifics",
    },
    {
      id: 49,
      question: "What is the purpose of the finalize() method in Java?",
      answer:
        "The finalize() method is called by the garbage collector before reclaiming an object's memory. It can be overridden to perform cleanup operations or release resources before the object is destroyed.",
      category: "Memory Management",
    },
    {
      id: 50,
      question:
        "What is the difference between the StringBuilder and StringBuffer classes in Java?",
      answer:
        "Both StringBuilder and StringBuffer classes are used to create mutable strings, but StringBuilder is not synchronized and is more efficient for single-threaded scenarios, while StringBuffer is synchronized and is safer for multithreaded scenarios.",
      category: "String Handling",
    },
    {
      id: 51,
      question: "What is the purpose of the this() constructor call in Java?",
      answer:
        "The this() constructor call is used to invoke another constructor of the same class from within a constructor. It allows constructor chaining and helps in reducing code duplication.",
      category: "Java Specifics",
    },
    {
      id: 52,
      question: "What is a marker interface in Java?",
      answer:
        "A marker interface in Java is an interface with no methods. It serves as a tag to inform the compiler or runtime environment about some property of the class that implements it.",
      category: "Advanced",
    },
    {
      id: 53,
      question: "What is method reference in Java?",
      answer:
        "Method reference in Java is a shorthand syntax for lambda expressions to call methods by referring to them directly using the '::' operator. It's useful when a lambda expression simply calls an existing method.",
      category: "Modern Java",
    },
    {
      id: 54,
      question: "What is a functional interface in Java?",
      answer:
        "A functional interface in Java is an interface that contains only one abstract method. It can have any number of default and static methods. Functional interfaces can be lambda expressions and method references.",
      category: "Modern Java",
    },
    {
      id: 55,
      question: "What is a lambda expression in Java?",
      answer:
        "A lambda expression in Java is a concise way to represent an anonymous function (a function without a name) that can be passed around as a method argument or stored in a variable.",
      category: "Modern Java",
    },
    {
      id: 56,
      question:
        "What is the purpose of the default keyword in interface methods in Java 8?",
      answer:
        "The default keyword in interface methods in Java 8 allows the declaration of concrete methods in interfaces. It enables backward compatibility, allowing interfaces to evolve without breaking existing implementations.",
      category: "Modern Java",
    },
    {
      id: 57,
      question:
        "What is the purpose of the static keyword in interface methods in Java 8?",
      answer:
        "The static keyword in interface methods in Java 8 allows the declaration of static methods in interfaces. These methods are not inherited by implementing classes and can only be accessed using the interface name.",
      category: "Modern Java",
    },
    {
      id: 58,
      question: "What is the strictfp keyword in Java?",
      answer:
        "The strictfp keyword in Java is used to ensure that floating-point calculations follow the IEEE 754 standard, providing consistent results across different platforms. It applies to classes, methods, and interfaces.",
      category: "Java Specifics",
    },
    {
      id: 59,
      question: "What is the purpose of the enum keyword in Java?",
      answer:
        "The enum keyword in Java is used to define a special type called an enumeration, which consists of a fixed set of constants. Enums can have constructors, methods, and instance variables.",
      category: "Java Specifics",
    },
    {
      id: 60,
      question: "What is the purpose of the super() constructor call in Java?",
      answer:
        "The super() constructor call in Java is used to invoke the constructor of the superclass from within a subclass constructor. It must be the first statement in the subclass constructor and is implicitly added if not explicitly defined.",
      category: "Java Specifics",
    },
    {
      id: 61,
      question:
        "What is the difference between static and instance variables in Java?",
      answer:
        "Static variables belong to the class and are shared among all instances of the class, whereas instance variables belong to each instance of the class separately.",
      category: "Java Specifics",
    },
    {
      id: 62,
      question:
        "What is the difference between static and instance methods in Java?",
      answer:
        "Static methods can be called using the class name without creating an instance of the class, whereas instance methods are called on instances of the class and can access instance variables.",
      category: "Java Specifics",
    },
    {
      id: 63,
      question: "What is the purpose of the finalize() method in Java?",
      answer:
        "The finalize() method is called by the garbage collector before reclaiming an object's memory. It can be overridden to perform cleanup operations or release resources before the object is destroyed.",
      category: "Memory Management",
    },
    {
      id: 64,
      question: "What is the purpose of the super keyword in Java?",
      answer:
        "The super keyword in Java is used to refer to the superclass of the current object. It can be used to call superclass methods, access superclass constructors, and access superclass variables.",
      category: "Java Specifics",
    },
    {
      id: 65,
      question: "What is the method hiding in Java?",
      answer:
        "Method hiding occurs when a subclass defines a static method with the same signature as a static method in the superclass, effectively hiding the superclass method rather than overriding it.",
      category: "Advanced",
    },
    {
      id: 66,
      question:
        "What is the difference between == and .equals() method in Java?",
      answer:
        "The == operator in Java checks for reference equality, i.e., whether two references point to the same object. The .equals() method, on the other hand, checks for content equality, i.e., whether two objects have the same content or value.",
      category: "Java Specifics",
    },
    {
      id: 67,
      question: "What is the purpose of the instanceof operator in Java?",
      answer:
        "The instanceof operator in Java is used to test whether an object is an instance of a particular class or interface. It returns true if the object is an instance of the specified type or a subtype; otherwise, it returns false.",
      category: "Java Specifics",
    },
    {
      id: 68,
      question: "What is the purpose of the transient keyword in Java?",
      answer:
        "The transient keyword is used to indicate that a field should not be serialized when the object is serialized. It is often used for fields that should not be persisted, such as passwords or temporary data.",
      category: "Java Specifics",
    },
    {
      id: 69,
      question: "What is the purpose of the volatile keyword in Java?",
      answer:
        "The volatile keyword in Java is used to indicate that a variable's value may be modified by multiple threads asynchronously. It ensures that changes made by one thread are visible to other threads immediately, preventing stale reads.",
      category: "Java Specifics",
    },
    {
      id: 70,
      question:
        "What is the difference between ArrayList and LinkedList in Java?",
      answer:
        "ArrayList is implemented as a resizable array, allowing fast random access but slower insertion and deletion of elements. LinkedList is implemented as a doubly linked list, allowing fast insertion and deletion but slower random access.",
      category: "Collections",
    },
    {
      id: 71,
      question: "What is the difference between HashMap and Hashtable in Java?",
      answer:
        "Both HashMap and Hashtable are used to store key-value pairs, but HashMap is not synchronized and allows null keys and values, while Hashtable is synchronized and does not allow null keys or values.",
      category: "Collections",
    },
    {
      id: 72,
      question: "What is the purpose of the final keyword in Java?",
      answer:
        "The final keyword in Java is used to restrict the user from changing the value of a variable, overriding a method, or inheriting from a class. It makes the entity immutable or unchangeable.",
      category: "Java Specifics",
    },
    {
      id: 73,
      question: "What is method overloading in Java?",
      answer:
        "Method overloading in Java is a feature that allows a class to have multiple methods with the same name but different parameters. The compiler determines which method to call based on the number and types of arguments passed.",
      category: "Methods",
    },
    {
      id: 74,
      question: "What is method overriding in Java?",
      answer:
        "Method overriding in Java is a feature that allows a subclass to provide a specific implementation of a method that is already defined in its superclass. It is used for achieving runtime polymorphism.",
      category: "Methods",
    },
    {
      id: 75,
      question: "What is polymorphism in Java?",
      answer:
        "Polymorphism in Java is the ability of a single method or function to operate on different types of data. It can be achieved through method overloading and method overriding.",
      category: "Principles",
    },
    {
      id: 76,
      question: "What is inheritance in Java?",
      answer:
        "Inheritance in Java is the mechanism where a new class (subclass) is derived from an existing class (superclass), inheriting its properties and behaviors. It promotes code reusability and enables hierarchical relationships between classes.",
      category: "Principles",
    },
    {
      id: 77,
      question: "What is encapsulation in Java?",
      answer:
        "Encapsulation in Java is the mechanism that binds together the data (attributes) and methods (behaviors) that manipulate the data and keeps both safe from outside interference and misuse. It is achieved through access modifiers such as private, protected, and public.",
      category: "Principles",
    },
    {
      id: 78,
      question: "What is an abstraction in Java?",
      answer:
        "Abstraction in Java is the process of hiding the implementation details and showing only the essential features of an object. It allows the programmer to focus on what an object does rather than how it does it.",
      category: "Principles",
    },
    {
      id: 79,
      question: "What is a constructor in Java?",
      answer:
        "A constructor in Java is a special type of method that is automatically called when an object is created. It is used to initialize the object's state.",
      category: "Java Specifics",
    },
    {
      id: 80,
      question: "What is this keyword in Java?",
      answer:
        "This keyword in Java is a reference to the current object. It can be used to refer to instance variables and methods of the current object, differentiate between instance variables and method parameters with the same name, and invoke current class constructors.",
      category: "Java Specifics",
    },
    {
      id: 81,
      question: "What is a static initializer block in Java?",
      answer:
        "A static initializer block in Java is a block of code enclosed in curly braces {} and preceded by the static keyword. It is used to initialize static variables of a class and is executed when the class is loaded into memory.",
      category: "Java Specifics",
    },
    {
      id: 82,
      question: "What is a non-static initializer block in Java?",
      answer:
        "A non-static initializer block in Java is a block of code enclosed in curly braces {} but without the static keyword. It is executed on instance of the class creation, before the constructor is called, and can be used to initialize instance variables.",
      category: "Java Specifics",
    },
    {
      id: 83,
      question: "What is the purpose of the super() constructor call in Java?",
      answer:
        "The super() constructor call in Java is used to invoke the constructor of the superclass from within a subclass constructor. It must be the first statement in the subclass constructor and is implicitly added if not explicitly defined.",
      category: "Java Specifics",
    },
    {
      id: 84,
      question:
        "What is the difference between composition and inheritance in Java?",
      answer:
        "Composition involves creating complex objects by combining simpler ones, while inheritance involves creating new classes based on existing ones. Composition promotes code reuse through object composition, while inheritance promotes reuse through class extension.",
      category: "Design Patterns",
    },
    {
      id: 85,
      question:
        "What is the difference between an abstract class and an interface in Java?",
      answer:
        "An abstract class in Java can have both abstract and concrete methods, while an interface can only have abstract methods. An abstract class can implement multiple interfaces but can extend only one class.",
      category: "Advanced",
    },
    {
      id: 86,
      question:
        "What is the purpose of the default method in interfaces in Java 8?",
      answer:
        "The default method in interfaces in Java 8 allows the declaration of concrete methods in interfaces. It enables backward compatibility, allowing interfaces to evolve without breaking existing implementations.",
      category: "Modern Java",
    },
    {
      id: 87,
      question:
        "What is the purpose of the static method in interfaces in Java 8?",
      answer:
        "The static method in interfaces in Java 8 allows the declaration of static methods in interfaces. These methods are not inherited by implementing classes and can only be accessed using the interface name.",
      category: "Modern Java",
    },
    {
      id: 88,
      question: "What is the method hiding in Java?",
      answer:
        "Method hiding occurs when a subclass defines a static method with the same signature as a static method in the superclass, effectively hiding the superclass method rather than overriding it.",
      category: "Advanced",
    },
    {
      id: 89,
      question: "What is dynamic method dispatch in Java?",
      answer:
        "Dynamic method dispatch is a mechanism in Java where the method to be invoked is determined at runtime based on the object being referred to by the reference variable. It enables polymorphic behavior in Java.",
      category: "Advanced",
    },
    {
      id: 90,
      question: "What is a lambda expression in Java?",
      answer:
        "A lambda expression in Java is a concise way to represent an anonymous function (a function without a name) that can be passed around as a method argument or stored in a variable.",
      category: "Modern Java",
    },
    {
      id: 91,
      question:
        "What is the difference between == and .equals() method for comparing strings in Java?",
      answer:
        "The == operator checks for reference equality, i.e., whether two string references point to the same object. The .equals() method checks for content equality, i.e., whether two strings have the same sequence of characters.",
      category: "String Handling",
    },
    {
      id: 92,
      question: "What is the purpose of the instanceof operator in Java?",
      answer:
        "The instanceof operator in Java is used to test whether an object is an instance of a particular class or interface. It returns true if the object is an instance of the specified type or a subtype; otherwise, it returns false.",
      category: "Java Specifics",
    },
    {
      id: 93,
      question: "What is method overloading in Java?",
      answer:
        "Method overloading in Java is a feature that allows a class to have multiple methods with the same name but different parameters. The compiler determines which method to call based on the number and types of arguments passed.",
      category: "Methods",
    },
    {
      id: 94,
      question: "What is method overriding in Java?",
      answer:
        "Method overriding in Java is a feature that allows a subclass to provide a specific implementation of a method that is already defined in its superclass. It is used for achieving runtime polymorphism.",
      category: "Methods",
    },
    {
      id: 95,
      question: "What is polymorphism in Java?",
      answer:
        "Polymorphism in Java is the ability of a single method or function to operate on different types of data. It can be achieved through method overloading and method overriding.",
      category: "Principles",
    },
    {
      id: 96,
      question: "What is inheritance in Java?",
      answer:
        "Inheritance in Java is the mechanism where a new class (subclass) is derived from an existing class (superclass), inheriting its properties and behaviors. It promotes code reusability and enables hierarchical relationships between classes.",
      category: "Principles",
    },
    {
      id: 97,
      question: "What is encapsulation in Java?",
      answer:
        "Encapsulation in Java is the mechanism that binds together the data (attributes) and methods (behaviors) that manipulate the data and keeps both safe from outside interference and misuse. It is achieved through access modifiers such as private, protected, and public.",
      category: "Principles",
    },
    {
      id: 98,
      question: "What is an abstraction in Java?",
      answer:
        "Abstraction in Java is the process of hiding the implementation details and showing only the essential features of an object. It allows the programmer to focus on what an object does rather than how it does it.",
      category: "Principles",
    },
    {
      id: 99,
      question: "What is a constructor in Java?",
      answer:
        "A constructor in Java is a special type of method that is automatically called when an object is created. It is used to initialize the object's state.",
      category: "Java Specifics",
    },
    {
      id: 100,
      question: "What is this keyword in Java?",
      answer:
        "This keyword in Java is a reference to the current object. It can be used to refer to instance variables and methods of the current object, differentiate between instance variables and method parameters with the same name, and invoke current class constructors.",
      category: "Java Specifics",
    },
  ];
  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const markAsCompleted = (id) => {
    const newCompleted = new Set(completedQuestions);
    if (newCompleted.has(id)) {
      newCompleted.delete(id);
    } else {
      newCompleted.add(id);
    }
    setCompletedQuestions(newCompleted);
  };

  const progressPercentage = (completedQuestions.size / questions.length) * 100;

  return (
    <>
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-4">
          <BookOpen className="w-8 h-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-800">
            Java OOP Interview Questions
          </h1>
        </div>

        {/* Progress Bar */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">
              Your Progress
            </span>
            <span className="text-sm text-gray-500">
              {completedQuestions.size} of {questions.length} completed
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <div className="text-right mt-1">
            <span className="text-xs text-gray-500">
              {Math.round(progressPercentage)}%
            </span>
          </div>
        </div>
      </div>

      {/* Questions */}
      <div className="space-y-4">
        {questions.map((item) => {
          const isExpanded = expandedCard === item.id;
          const isCompleted = completedQuestions.has(item.id);

          return (
            <div
              key={item.id}
              className={`bg-white rounded-lg shadow-sm border transition-all duration-200 hover:shadow-md ${
                isCompleted ? "border-green-300 bg-green-50" : "border-gray-200"
              }`}
            >
              <div
                className="p-5 cursor-pointer"
                onClick={() => toggleCard(item.id)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="bg-blue-600 text-white text-sm font-semibold px-2 py-1 rounded">
                        {item.id}
                      </span>
                      {isCompleted && (
                        <span className="text-green-600 text-sm">
                          ✓ Completed
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-medium text-gray-800">
                      {item.question}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 ml-4">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        markAsCompleted(item.id);
                      }}
                      className={`p-2 rounded-full transition-colors ${
                        isCompleted
                          ? "bg-green-500 text-white"
                          : "bg-gray-200 text-gray-600 hover:bg-green-500 hover:text-white"
                      }`}
                      title={
                        isCompleted ? "Mark as incomplete" : "Mark as complete"
                      }
                    >
                      ✓
                    </button>
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </div>
              </div>

              {isExpanded && (
                <div className="px-5 pb-5 border-t border-gray-100">
                  <div className="pt-4">
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h4 className="text-sm font-semibold text-blue-800 mb-2">
                        Answer:
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};
export default InterviewQuestion;
