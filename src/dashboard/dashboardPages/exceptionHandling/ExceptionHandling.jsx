import React from "react";
import {
  AlertTriangle,
  CheckCircle,
  Zap,
  Shield,
  Code,
  Target,
} from "lucide-react";
import img from "../../../assets/Exception/img1.jpg";

const ICONS = {
  exception: (
    <AlertTriangle className="text-red-600 dark:text-red-300" size={24} />
  ),
  check: <CheckCircle className="text-green-500 mt-1" size={20} />,
  code: <Code className="text-purple-500 mt-1" size={20} />,
  shield: <Shield className="text-blue-500 mt-1" size={20} />,
  zap: <Zap className="text-yellow-500 mt-1" size={20} />,
  target: <Target className="text-indigo-500 mt-1" size={20} />,
};

const exceptionClassData = {
  header: {
    title: "Exception Handling",
  },
  sections: [
    {
      id: 1,
      icon: ICONS.exception,
      title: "Exception Overview",
      description:
        "An exception is an unwanted event that happens during the execution of a program. It disrupts the normal flow of instructions. Exception handling in Java is a way to deal with unexpected events that occur during program execution.",
      keyPoints: [
        "Exception is an unwanted event during program execution",
        "Disrupts the normal flow of instructions",
        "Exception handling provides graceful program termination",
        "It is mandatory to handle exceptions for smooth program execution",
        "Helps maintain program stability and user experience",
        "Allows recovery from error conditions when possible",
      ],
    },
    {
      id: 2,
      icon: ICONS.target,
      title: "Exception Hierarchy",
      description:
        "In Java, exceptions are present in the java.lang.Throwable class. The Throwable class has two main subclasses: Exception and Error, which are further inherited by other subclasses.",
      hasImage: true,
      imageUrl: img,
      imageAlt:
        "Java Exception Hierarchy Diagram showing Throwable as root class with Exception and Error as main branches",
      keyPoints: [
        {
          category: "EXCEPTION",
          details: [
            "Most cases exceptions are caused by our program",
            "These are recoverable exceptions",
            "Can be handled using try-catch blocks",
            "Examples: IOException, SQLException, ArithmeticException",
            "Program can continue execution after handling",
          ],
        },
        {
          category: "ERROR",
          details: [
            "Most cases errors are not caused by our program",
            "Due to lack of system resources",
            "These are non-recoverable",
            "Examples: OutOfMemoryError, StackOverflowError",
            "Program typically cannot recover from errors",
          ],
        },
      ],
    },
    {
      id: 3,
      icon: ICONS.zap,
      title: "Runtime Stack Frame Mechanism",
      description:
        "Understanding how the JVM manages method calls and exception propagation through the runtime stack is crucial for effective exception handling.",
      keyPoints: [
        "JVM creates an empty stack when program starts executing",
        "For every new method executed, JVM creates corresponding stack frame",
        "After method execution, JVM removes corresponding stack frame",
        "Process continues until main thread stack frame is removed",
        "Stack becomes empty and is destroyed by JVM at the end",
        {
          type: "example",
          code: `class Test {
    public static void main(String[] args) {
        doStuff();
    }
    
    public static void doStuff() {
        doMoreStuff();
    }
    
    public static void doMoreStuff() {
        System.out.println("Hello");
    }
}
// Output: Hello`,
        },
      ],
    },
    {
      id: 4,
      icon: ICONS.shield,
      title: "Ways of Exception Handling",
      description:
        "Java provides two main approaches to handle exceptions: Default Exception Handling (by JVM) and Customized Exception Handling (by programmer).",
      keyPoints: [
        {
          category: "1. Default Exception Handling",
          details: [
            "When exception occurs, method creates Exception object containing:",
            "  • Name of the Exception",
            "  • Description of the Exception",
            "  • Location of the Exception",
            "Exception object is handed over to JVM",
            "JVM checks if method contains handling code",
            "If no handling code, method terminates abnormally",
            "JVM removes corresponding stack frame entry",
            "Process continues up to main() method",
            "If main() also has no handling code, it terminates abnormally",
            "JVM hands over to Default Exception Handler",
            "Default handler prints exception information on console",
            {
              type: "example",
              code: `class A {
    public static void main(String[] args) {
        m1();
    }
    
    public static void m1() {
        m2();
    }
    
    public static void m2() {
        System.out.println("Hii");
        System.out.println("Hello");
        System.out.println(10/0); // ArithmeticException
        System.out.println("Bye");  // Won't execute
        System.out.println("Hey");  // Won't execute
    }
}`,
            },
          ],
        },
        {
          category: "2. Customized Exception Handling",
          details: [
            "Programmers handle exceptions using five keywords:",
            "  • try - Contains risky code that might throw exception",
            "  • catch - Handles exceptions thrown by try block",
            "  • throw - Explicitly throws predefined exceptions",
            "  • throws - Declares exceptions in method signature",
            "  • finally - Executes regardless of exception occurrence",
          ],
        },
      ],
    },
    {
      id: 5,
      icon: ICONS.code,
      title: "Exception Handling Keywords",
      description:
        "Java provides specific keywords for handling exceptions effectively. Each keyword serves a specific purpose in the exception handling mechanism.",
      keyPoints: [
        {
          category: "try-catch Block",
          details: [
            "try: Contains code that might throw an exception",
            "Cannot be used alone - must be followed by catch or finally",
            "catch: Catches and handles exceptions from try block",
            "Declared after try block",
            {
              type: "syntax",
              code: `try {
    // risky code
} catch (ExceptionType e) {
    // handling code
}`,
            },
          ],
        },
        {
          category: "finally Block",
          details: [
            "Executes important code regardless of try block outcome",
            "Always runs whether exception occurs or not",
            "Used for cleanup operations like closing files",
            {
              type: "syntax",
              code: `try {
    // code
} catch (Exception e) {
    // handling code
} finally {
    // always runs
}`,
            },
          ],
        },
        {
          category: "throw Keyword",
          details: [
            "Used to throw predefined exceptions explicitly",
            "Can create and throw custom exception objects",
            "Typically used for validation and custom error conditions",
            {
              type: "example",
              code: `public class ThrowExample {
    public static void main(String[] args) {
        int age = 16;
        
        if (age < 18) {
            throw new ArithmeticException("Age must be 18 or above");
        }
        
        System.out.println("You can vote!");
    }
}`,
            },
          ],
        },
        {
          category: "throws Keyword",
          details: [
            "Declares exceptions in method signature",
            "Tells compiler that method may throw specified exception",
            "Mainly used for checked exceptions",
            "Helps in exception propagation to caller method",
            {
              type: "example",
              code: `public class Divide {
    public static void main(String[] args) throws ArithmeticException {
        divide(10, 0);
    }
    
    static void divide(int a, int b) throws ArithmeticException {
        System.out.println("Result: " + (a / b));
    }
}`,
            },
          ],
        },
      ],
    },
    {
      id: 6,
      icon: ICONS.target,
      title: "Types of Exceptions",
      description:
        "Java exceptions are categorized into two main types based on when they are checked and how they must be handled by the programmer.",
      keyPoints: [
        {
          category: "1. Checked Exceptions",
          details: [
            "Checked at compile-time by the compiler",
            "Must be handled using try-catch or declared with throws",
            "Compiler verifies that code handles these exceptions",
            "Represent recoverable error conditions",
            "Examples: IOException, SQLException, FileNotFoundException",
            "Program won't compile without proper handling",
          ],
        },
        {
          category: "2. Unchecked Exceptions",
          details: [
            "Also known as Runtime Exceptions",
            "**Not checked at compile-time**",
            "Compiler doesn't force programmer to handle them",
            "Occur due to programming logic errors",
            "Usually indicate bugs in the code",
            "Subclasses of RuntimeException",
            "Examples: NullPointerException, ArrayIndexOutOfBoundsException, ArithmeticException",
          ],
        },
      ],
    },
    {
      id: 7,
      icon: ICONS.code,
      title: "Common Exception Methods",
      description:
        "Java provides several built-in methods to get information about exceptions. These methods help in debugging and logging exception details.",
      keyPoints: [
        {
          category: "1. printStackTrace()",
          details: [
            "Prints complete details of the exception",
            "Includes exception type, message, and line number",
            "Shows the complete stack trace",
            "Most detailed exception information",
            {
              type: "example",
              code: `try {
    int a = 10 / 0;
} catch (ArithmeticException e) {
    e.printStackTrace();
}

// Output:
// java.lang.ArithmeticException: / by zero
//     at Example.main(Example.java:3)`,
            },
          ],
        },
        {
          category: "2. getMessage()",
          details: [
            "Returns only the description/message of the exception",
            "Most concise exception information",
            "Useful for user-friendly error messages",
            {
              type: "example",
              code: `try {
    int a = 10 / 0;
} catch (ArithmeticException e) {
    System.out.println(e.getMessage());
}

// Output: / by zero`,
            },
          ],
        },
        {
          category: "3. toString()",
          details: [
            "Returns the name of exception class and message",
            "Combines class name with error description",
            "Balance between detail and conciseness",
            {
              type: "example",
              code: `try {
    int a = 10 / 0;
} catch (ArithmeticException e) {
    System.out.println(e.toString());
}

// Output: java.lang.ArithmeticException: / by zero`,
            },
          ],
        },
      ],
    },
  ],
};

const SectionHeader = ({ title, subtitle }) => (
  <div className="text-center mb-12">
    <h1 className="text-4xl md:text-5xl font-bold text-indigo-700 dark:text-red-300 mb-2">
      {title}
    </h1>
    {subtitle && (
      <p className="text-lg text-gray-600 dark:text-gray-400">{subtitle}</p>
    )}
  </div>
);

const PointItem = ({ point }) => {
  if (typeof point === "object" && point.code) {
    const label =
      point.type === "syntax"
        ? "Syntax:"
        : point.type === "example"
          ? "Example:"
          : "Code:";
    return (
      <li className="flex flex-col gap-2">
        <div className="flex items-start gap-3">
          {ICONS.check}
          <span className="text-gray-800 dark:text-gray-200 font-medium">
            {label}
          </span>
        </div>
        <div className="ml-8">
          <pre className="bg-black text-green-400 p-3 rounded-lg text-sm font-mono overflow-x-auto whitespace-pre-wrap">
            <code>{point.code}</code>
          </pre>
        </div>
      </li>
    );
  }

  return (
    <li className="flex items-start gap-3 text-gray-800 dark:text-gray-200 leading-relaxed">
      {ICONS.check}
      <span dangerouslySetInnerHTML={{ __html: point }} />
    </li>
  );
};

const CategorySection = ({ category, details }) => (
  <div className="mb-6">
    <h4 className="text-lg font-semibold text-red-600 dark:text-red-400 mb-3">
      🔹 {category}
    </h4>
    <ul className="space-y-3 ml-4">
      {details.map((detail, index) => (
        <PointItem key={index} point={detail} />
      ))}
    </ul>
  </div>
);

const SimplePointsList = ({ points }) => (
  <ul className="space-y-3">
    {points.map((point, index) => (
      <PointItem key={index} point={point} />
    ))}
  </ul>
);

const CategorizedPointsList = ({ points }) => (
  <div className="space-y-6">
    {points.map((group, index) => (
      <CategorySection
        key={index}
        category={group.category}
        details={group.details}
      />
    ))}
  </div>
);

const ExceptionHierarchyImage = ({ imageUrl, imageAlt }) => (
  <div className="my-8 flex justify-center">
    <img
      src={imageUrl}
      alt={imageAlt}
      className="max-w-full h-auto rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
      style={{ maxHeight: "500px" }}
    />
  </div>
);

const ContentCard = ({ section }) => {
  const isSimplePoints = typeof section.keyPoints[0] === "string";

  return (
    <div className="w-full bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border-l-8 border-indigo-600 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-center gap-3 mb-4">
        {section.icon}
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          {section.title}
        </h2>
      </div>

      <p className="text-gray-700 dark:text-gray-300 mb-6 text-base leading-relaxed">
        {section.description}
      </p>

      {section.hasImage && (
        <ExceptionHierarchyImage
          imageUrl={section.imageUrl}
          imageAlt={section.imageAlt}
        />
      )}

      {isSimplePoints ? (
        <SimplePointsList points={section.keyPoints} />
      ) : (
        <CategorizedPointsList points={section.keyPoints} />
      )}
    </div>
  );
};
const ExceptionHandling = () => {
  const { header, sections } = exceptionClassData;

  return (
    <div className="w-[95%] max-w-7xl mx-auto py-8">
      <SectionHeader title={header.title} subtitle={header.subtitle} />
      <div className="flex flex-col gap-10">
        {sections.map((section) => (
          <ContentCard key={section.id} section={section} />
        ))}
      </div>
    </div>
  )
}

export default ExceptionHandling