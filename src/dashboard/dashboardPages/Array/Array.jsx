import React from "react";
import { Grid, CheckCircle, AlertTriangle, Code } from "lucide-react";

const ICONS = {
  array: <Grid className="text-blue-600 dark:text-blue-300" size={24} />,
  check: <CheckCircle className="text-green-500 mt-1" size={20} />,
  warning: <AlertTriangle className="text-orange-500 mt-1" size={20} />,
  code: <Code className="text-purple-500 mt-1" size={20} />,
};

const arrayClassData = {
  header: {
    title: "Array ",
  },
  sections: [
    {
      id: 1,
      icon: ICONS.array,
      title: "Array Overview",
      description:
        "An array is a collection of similar data elements stored under a single variable name, where each element can be accessed using its index number. Arrays provide a way to store multiple values of the same data type in a contiguous memory location.",
      keyPoints: [
        "Collection of similar data elements stored under single variable name",
        "Each element can be accessed using its index number (0-based indexing)",
        "Elements are stored in contiguous memory locations",
        "Provides efficient random access to elements",
        "Index starts from 0 and goes up to (length - 1)",
        {
          type: "syntax",
          code: "int[] arr = {2, 4, 10, 5, 15, 3};",
        },
      ],
    },
    {
      id: 2,
      icon: ICONS.warning,
      title: "Disadvantages of Arrays",
      description:
        "While arrays are fundamental data structures, they come with certain limitations that developers need to be aware of when choosing the appropriate data structure for their applications.",
      keyPoints: [
        {
          category: "1. Fixed Size",
          details: [
            "Once an array is created, its size cannot be changed during runtime",
            "Memory is allocated at the time of declaration",
            "Cannot dynamically grow or shrink based on requirements",
            "Need to know the maximum size beforehand",
            {
              type: "example",
              code: `int[] arr = new int[5]; // Size is fixed to 5
// Cannot change size later in the program`,
            },
          ],
        },
        {
          category: "2. Same Data Type Only (Homogeneous)",
          details: [
            "Arrays can store only one type of data at a time",
            "All elements must be of the same data type",
            "Cannot mix different data types in the same array",
            "Type safety is enforced at compile time",
            {
              type: "example",
              code: `int[] numbers = {1, 2, 3};        // ✓ Valid - all integers
String[] names = {"John", "Jane"};  // ✓ Valid - all strings
// int[] mixed = {1, "hello"};      // ✗ Invalid - mixed types`,
            },
          ],
        },
        {
          category: "3. No Built-in Methods",
          details: [
            "Arrays have no underlying data structure with predefined methods",
            "Programmer is responsible for writing all logic explicitly",
            "No built-in methods for sorting, searching, or manipulation",
            "Limited functionality compared to Collection classes",
            "Manual implementation required for common operations",
          ],
        },
      ],
    },
    {
      id: 3,
      icon: ICONS.array,
      title: "Types of Arrays",
      description:
        "Java supports different types of arrays based on dimensions. Understanding these types helps in choosing the right array structure for specific use cases.",
      keyPoints: [
        {
          category: "1. One-Dimensional Array (1D Array)",
          details: [
            "A 1D array is a collection of elements stored in a single row in memory",
            "Each element is accessed using a single index",
            "Most commonly used type of array",
            "Elements are arranged in linear sequence",
            {
              type: "syntax",
              code: "int[] arr = {10, 20, 30};",
            },
            {
              type: "example",
              code: `int[] numbers = {10, 20, 30, 40, 50};
System.out.println(numbers[0]); // Output: 10
System.out.println(numbers[2]); // Output: 30`,
            },
          ],
        },
        {
          category: "2. Two-Dimensional Array (2D Array)",
          details: [
            "A 2D array is an array of arrays, arranged in rows and columns",
            "Similar to a matrix or table structure",
            "Elements are accessed using two indices: row and column",
            "Useful for representing tabular data",
            {
              type: "syntax",
              code: `int[][] matrix = {
  {1, 2, 3},
  {4, 5, 6}
};`,
            },
            {
              type: "example",
              code: `int[][] matrix = {{1, 2, 3}, {4, 5, 6}};
System.out.println(matrix[0][1]); // Output: 2
System.out.println(matrix[1][2]); // Output: 6`,
            },
          ],
        },
        {
          category: "3. Multi-Dimensional Array (3D or more)",
          details: [
            "Arrays that have three or more dimensions",
            "Can be thought of as array of arrays of arrays",
            "Extends beyond rows and columns to multiple layers",
            "Each element is accessed by multiple indices",
            "Used for complex data structures like 3D graphics, scientific computations",
            {
              type: "syntax",
              code: "int[][][] arr = new int[2][3][4];",
            },
            {
              type: "example",
              code: `int[][][] cube = new int[2][3][4];
cube[0][1][2] = 100;
System.out.println(cube[0][1][2]); // Output: 100`,
            },
          ],
        },
      ],
    },
    {
      id: 4,
      icon: ICONS.code,
      title: "Array Declaration and Initialization",
      description:
        "Java provides multiple ways to declare and initialize arrays. Understanding these different approaches helps in choosing the most appropriate method based on your specific requirements.",
      keyPoints: [
        {
          category: "1. Static Initialization",
          details: [
            "Array size and elements are fixed and known before creation",
            "Elements are provided at the time of declaration",
            "Memory allocation and value assignment happen simultaneously",
            "Most convenient when you know all values beforehand",
            "Array size is automatically determined by number of elements",
            {
              type: "syntax",
              code: "int[] arr = {10, 20, 30, 40, 50};",
            },
            {
              type: "example",
              code: `// Different ways of static initialization
int[] numbers1 = {1, 2, 3, 4, 5};
String[] names = {"Alice", "Bob", "Charlie"};
double[] prices = {19.99, 25.50, 12.75};

System.out.println(numbers1.length); // Output: 5`,
            },
          ],
        },
        {
          category: "2. Dynamic Initialization",
          details: [
            "Declare an array first, then allocate memory later using new keyword",
            "Values are assigned after memory allocation",
            "Provides flexibility in array creation",
            "Useful when array size is determined at runtime",
            "Initial values are set to default values (0 for int, null for objects)",
            {
              type: "syntax",
              code: `int[] arr;           // Declaration
arr = new int[5];    // Memory allocation
arr[0] = 10;         // Assigning values`,
            },
            {
              type: "example",
              code: `// Dynamic initialization example
int[] arr;                    // Declaration
arr = new int[5];            // Memory allocation (size 5)

// Assigning values later
arr[0] = 10;
arr[1] = 20;
arr[2] = 30;
arr[3] = 40;
arr[4] = 50;

System.out.println(arr[2]); // Output: 30`,
            },
          ],
        },
      ],
    },
    {
      id: 5,
      icon: ICONS.array,
      title: "Array Length Property",
      description:
        "The length property is a built-in attribute of arrays in Java that provides the number of elements in the array. It's a read-only property that helps in array traversal and boundary checking.",
      keyPoints: [
        "length gives the number of elements in the array",
        "It's a property, not a method (no parentheses needed)",
        "Read-only property - cannot be modified",
        "Useful for loop boundaries and array traversal",
        "Helps prevent ArrayIndexOutOfBoundsException",
        {
          type: "syntax",
          code: "arrayName.length",
        },
        {
          type: "example",
          code: `int[] numbers = {10, 20, 30, 40, 50};
System.out.println("Array length is: " + numbers.length);
// Output: Array length is: 5

// Using length in loops
for(int i = 0; i < numbers.length; i++) {
    System.out.println("Element at index " + i + ": " + numbers[i]);
}`,
        },
        {
          type: "example",
          code: `// Practical usage examples
String[] fruits = {"Apple", "Banana", "Orange"};
System.out.println("Total fruits: " + fruits.length); // Output: 3

// Enhanced for loop using length concept
for(String fruit : fruits) {
    System.out.println(fruit);
}`,
        },
      ],
    },
  ],
};

const SectionHeader = ({ title, subtitle }) => (
  <div className="text-center mb-8">
    <h1 className="text-4xl md:text-5xl font-bold text-blue-700 dark:text-blue-300 mb-2">
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
    <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">
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

const ContentCard = ({ section }) => {
  const isSimplePoints = typeof section.keyPoints[0] === "string";

  return (
    <div className="w-full bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border-l-8 border-blue-600 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-center gap-3 mb-4">
        {section.icon}
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          {section.title}
        </h2>
      </div>

      <p className="text-gray-700 dark:text-gray-300 mb-6 text-base leading-relaxed">
        {section.description}
      </p>

      {isSimplePoints ? (
        <SimplePointsList points={section.keyPoints} />
      ) : (
        <CategorizedPointsList points={section.keyPoints} />
      )}
    </div>
  );
};

const Array = () => {
  const { header, sections } = arrayClassData;

  return (
    <div className="w-[95%] max-w-7xl mx-auto py-8">
      <SectionHeader title={header.title} subtitle={header.subtitle} />
      <div className="flex flex-col gap-10">
        {sections.map((section) => (
          <ContentCard key={section.id} section={section} />
        ))}
      </div>
    </div>
  );
};

export default Array;