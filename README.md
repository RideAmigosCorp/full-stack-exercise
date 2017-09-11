
# Full Stack Exercise
In this exercise, we’ll ask you to re-implement a basic piece of functionality in the RideAmigos platform. We’d expect this to take between 1 to 3 hours. Once you’ve finished, you can submit the exercise via GitHub link or by emailing a zip file with the code in it.
## Background
One way we encourage alternative commuting at RideAmigos is with challenges, a competition between users. Clients will specify the parameters for a challenge, for example “number of miles  biked between Sept. 1st and October 15th”, and users will compete by submitting triplogs. The user with the most miles biked is the winner.

You can see an example of our challenge implementation here, but don’t let it bias you towards one specific implementation or design. You won’t be judged based on how closely you mirror our design.
## Back-end Requirements
We’ve created a GitHub repo with a basic model for a TripLog and Challenge, along with some basic management scripts and an empty express router. Create an express server that will calculate and supply the challenge leaderboard for a given challenge, an array of userIds and the number of miles they did for the trip. 
### Example Output
```
>curl localhost:3000/challenges/1/leaderboard
[
	{“userId” : 4, “miles” : 15},
	{“userId” : 6, “miles” : 14},
	{“userId” : 1, “miles” : 4}
]
```
## Front-end Requirements
Create a frontend that will consume your leaderboard API and render a table of challenge users in ascending rank.  Each row should contain user’s id, trips and miles.  Some CSS should be applied to make the table easy to read.

There is an AngularJS 1.5x project setup in the repo.  In the project, we have provided a skeleton service to perform HTTP requests, some bootstrap styling and basic routing.  The architecture is up to you.  Be prepared to discuss your approach and how it can impact the project in the future.  Angular 1.5 does provide a component interface similar to other modern frameworks.

If you’re not comfortable with Angular 1, feel free to use Angular 2/4, React, Vue or your own vanilla JS approach.  Just be sure it runs with no errors and is transpiled to run in all major browsers.

## Using this Repo
We're a MEAN stack shop, so you'll need Node, Express & MongoDb installed before you can use this repo.
* Node should be >= v 6.0.0
* MongoDB should be >= v3.2 (earlier may work but you may have to change the mongoose version)
* Express & other deps are specified in `package.json` and `yarn.lock`. You can install from those in the normal way.

To get the backend running with some sample data, you can use the builtin `mongoimport` shell command, along with the two files included in the backend folder. 

## Evaluation
While the perfect implementation could take quite a bit of time, we’d prefer you to spend only about an hour or two on the task. In particular, you’ll be judged not on the completeness of the code or your ability to predict every possible edge case, but instead on the structure, accuracy, and extensibility of your solution (the “broad strokes”). Thus, while you solution should e.g. run a server and render a front-end, we are not evaluating your ability to ship production ready code.  Do not worry about authentication, testing, security, etc.



