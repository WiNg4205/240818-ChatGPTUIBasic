# 240818-ChatGPTUIBasic (#13)
This is a basic ChatGPT UI with a header, textbox and a collapsible sidebar with complete button stylings. It is pretty much a complete UI wise besides the forms when clicking on individual buttons.

I worked on this over the course of two days, mostly today (19/08/24) in the past 6 hours. I have to be careful with doing too much cramming so I don't risk getting burnt out. This is about my limit.

At the start of this project, I tried switching to WebStorm from VSCode but for some reason webstorm didn't implement HMR with nuxt which is quite unfortunate and definitely a deal breaker if I can not figure out the issue. I think I've actually used more webstorm than VSCode for web development and I find it to be very efficient once I am comfortable with the tech stack. My university subscription for jetbrain products is about to expire as well so I guess I'll have to get used to just using VSCode anyways.

The feature that took the longest was making the collapsible sidebar. Vue components are not mutable by default and I could be wrong but I think I remember seeing that it isn't recommended to mutate props from child component. The solution I decided on was to pass in a function in the Sidebar child component that mutated the openSidebar property. This was fine but I also had a bug which took me ages to figure out. The sidebar was not collapsing because I had passed in a non-binding prop which I didn't realise makes it so that only a copy is passed into the child component. I am actually quite glad that I encountered this bug because I actually mentioned in my first vue project that I did not understand bindings but after today I understand it a lot better now.

Here are some things I learnt while making this UI:
- the spacing between buttons is more often than not due to padding rather than using gap or justify content
- it is tempting to use tailwind layers but there usually ends up being some slight differences in elements which makes it redundant most of the time
- I should wear my glasses while working on frontend to avoid eye strain because my eyes are constantly switching on what to focus on on the screen and also frontend requires attention to minute visual details
