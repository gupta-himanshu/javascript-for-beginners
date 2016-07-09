##Advantages of JavaScript
###The merits of using JavaScript are:
1. **Less server interaction**: We can validate user input before sending the
page off to the server. This saves server traffic, which means less load on
your server.
2. **Immediate feedback to the visitors**: Users don't have to wait for a
page reload to see if they have forgotten to enter something.
3. **Increased interactivity**: We can create interfaces that react when the
user hovers over them with a mouse or activates them via the keyboard.
4. **Richer interfaces**: We can use JavaScript to include such items as drag-
and-drop components and sliders to give a Rich Interface to our site
visitors.

##Limitations of JavaScript
###We cannot treat JavaScript as a full-fledged programming language. It lacks the following important features:
1. Client-side JavaScript does not allow the reading or writing of files.
2. JavaScript cannot be used for networking applications because there is no
such support available.
3. JavaScript doesn't have any multithreading or multiprocessor capabilities.

##Important notes:-
1. The HTML comment closing sequence `-->` is not recognized by JavaScript, so it should be written as `//-->`.
2. If we want to have a script run on some event, such as when a user
clicks somewhere, then we have to place that script within the `<head>...</head>`
tags.
3. If we need a script to run as the page loads so that the script
generates content in the page, then the script goes in the `<body>`
portion of the document. In this case, we cannot have any function
defined using javascript.
4. Three primitive data types supported by JavaScript are:
  * **Numbers**, e.g., 124, 122.30 etc.
  * **Strings** of text, e.g., "Hello World" etc.
  * **Boolean**, e.g., true or false.
5. JavaScript defines two trivial data types, **null** and **undefined**, each of which defines only a single value.
6. JavaScript supports a composite data type known as **object**.
7. JavaScript does not have understand difference between integer values and floating-
point values. All numbers in JavaScript are represented as floating-point values.
8. JavaScript represents numbers using the 64-bit floating-point format, as defined by
the IEEE 754 standard.
9. Storing a value in a variable is called **variable initialization**.
10. Use the **var** keyword only for declaration or initialization, once for the life
of any variable name in a document. We should not re-declare same variable
twice.
11. JavaScript is **untyped** language. This means that a JavaScript variable can hold
a value of any data type. Unlike many other languages, you don't have to tell
JavaScript during variable declaration what type of value the variable will hold.
12. Also, the value type of a variable can change during the execution of a program and
JavaScript takes care of it automatically.
13. Within the body of a function, a local variable takes precedence over a global
variable with the same name.
14. The **for...in** loop is used to loop through an object's properties.
15. Line breaks are not allowed between the **‘continue’** or **‘break’** statement
and its label name. Also, there should not be any other statement in between a
label name and associated loop.
16. There is a restriction in javascript that function definitions may not
appear within loops or conditionals. These restrictions on function definitions
apply only to function declarations with the function statement.
17. The **Function()** constructor is not passed any argument that
specifies a name for the function it creates. The **unnamed** functions created
with the Function() constructor are called **anonymous** functions.
18. We can specify a function name while creating a literal function as
follows:

    ```
    <script type="text/javascript">
      <!--
        var variablename = function FunctionName(Argument List){
          Function Body
        };
      //-->
    </script>
    ```
But this name does not have any significance, so it is not worthwhile.
19. To delete a cookie in javascript, we just need to set its expiry date to a
time in the past.
20. **void** is an important keyword in JavaScript which can be used as a unary
operator that appears before its single operand, which may be of any type. This
operator specifies an expression to be evaluated without returning a value.
