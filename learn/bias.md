# Dealing with various types of biases


## Optimistic bias or Hard easy bias:
**Ask the following questions:**
- Is there a possibility that solution might be wrong?
- Do you see any issues that might cause the problem?
- Are there any dependent features that might be impacted or have a side effects?
- Do you want to break down tasks or look at the codebase before providing estimates?

## Confirmation Bias and Wishful Thinking
This bias is close to wishful thinking, which will push you to favor pleasing information, instead of confronting the reality.

Example: If you look at the unit tests of a given project, they will often test that everything goes as expected, instead of trying to catch mistakes and possible failures. Again, confirming that the code do what it was intended to do was good enough for the developers. They only wanted to confirm that their code is right.

Manual tests, who are adulated by many developers too scared to write any kind of automatic test, are even more subject to the confirmation bias. Let’s face it: nobody like to test manually, and even less failing scenarios. It takes time, especially since you need to retest everything when a piece of code change.

That’s why manual tests only test artificially the best possible scenarios, not the ones which break your application.

## The Anchoring bias
Anchoring bias happens when you develop assuptions based on inital information you have got and with out further research or thinking. This is very common in software development.

e.g. proving estimates based on intial usecase discussions from the PM without further research and thinking.

Developers tend to develop this bias when they are workgin on the code base for longer time. Developer tend to follow the existing poor patterns in the code base without updating their mental models.
This will lead to incour more tech debt.
You can debias by
- Expert based model (experts review)
- Data based decisions

