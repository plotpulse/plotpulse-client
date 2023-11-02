

User
i need to create two readme files, but i am very tired and can only devote so much mental energy.

i have a github organization for the whole application which is called plot pulse. it is a social platform for authors, game developers, and other creatives fully centered on speculative fiction genres (sci fi, fantasy, superhero, mystery, horror, etc) with a stated purpose of allowing people to participating in sharing inspiration with each other and increasing productivity. current features are posting writing prompts and replying to them, future features include a suite of tools to allow for world building and planning

within the organization, i have two repositories. one is the plot pulse client, which will be the front end client long term. the second is the prompts api, which is currently a monolithic backend but will eventually become part of a microservices architecture and only be responsible for the writing prompts portion of the app.

can you get me set up with a markdown doc for each repo that has some pre-determined sections with headings laid out that i can fill in? feel free to use any of the information i provided to customize these
ChatGPT
Of course! Here are two template README files in Markdown format for your Plot Pulse GitHub organization repositories: Plot Pulse Client and Prompts API. You can fill in the specific details for each section:

Plot Pulse Client README.md
markdown
Copy code
# Plot Pulse Client

Welcome to the Plot Pulse Client repository, the front-end client for the Plot Pulse speculative fiction social platform. This client is designed to enhance the user experience and provide access to the various features of our platform.

## About Plot Pulse

Plot Pulse is a social platform dedicated to authors, game developers, and creatives who are passionate about speculative fiction genres such as sci-fi, fantasy, superhero, mystery, horror, and more. Our platform's primary mission is to facilitate the sharing of inspiration among our community members and boost productivity. 

### Features
- [ ] Posting and discovering writing prompts.
- [ ] Responding to writing prompts.
- [ ] Future plans include a suite of world-building and planning tools.

## Technologies
- Typescript
- React.js
- Chakra UI
- Auth0

## Known Issues
- Auth0 limitation - error in Firefox, Safari (https://community.auth0.com/t/problem-with-login-in-browsers-like-safari-firefox-brave/116696)

## Ongoing Development
- Profile dashboard recommendations
- Social interaction between users
- Switch Auth0 for custom JWT auth
