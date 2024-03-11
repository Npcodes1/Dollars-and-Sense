# Personal-Project
## DOLLAR$ & $EN$E- Financial Tracker

### Goal
- The goal of this project is to build a financial tracker using React as my personal project.

### Purpose of Project
- The purpose of the project is to help minority individuals budget and save for their first house while also providing financial literacy to increase their knowledge.

### Inspiration behind Project
- As a millennial, I was talking to my friends around my age and realized that the ones who were in a single income household were not close to being financially ready to buy their own home, despite wanting to. I did research and discovered that the average age for someone buying their first home is around 36 years of age and that millennials are having difficulties due to the increasing housing market prices, the economy, and supply/demand. Even more, the demographic who are able to buy their first house is predominantly white. 

- So I decided to create a project that focuses on helping minorities learn more about housing and budgeting to be able to bridge the financial gap and help them buy their first home.


### Coding Progress Diary
-02/27/24- Worked on navigation bar and footer for personal project and making them responsive. I also added a button where it will take me back to the top when I click on it. I tried to use getFullYear() to add the current year for the footer but it's not working. I will start working on adding more content to my pages.

-03/01/24- I made the bottom navigation bar for the mobile and tablet size. It was a little tricky trying to incorporate two different navigation bars and knowing when to hide it or show it.

-03/03/2024- Finished the Credit Score page. I was able to fix an image I had added. It was overlapping with the bottom navigation bar when it was in mobile size. I remembered about the z-index and was able to apply it to both the bottom navigation, the image div, and the footer to get the image to scroll underneath the navbar while also maintaining the smooth transition of the navbar disappearing and the footer appearing.

-03/06/2024- Received feedback from CodeSquad mentor, Kit. Worked on implementing the copyright at the bottom of the pages using JavaScript. Also, brainstorming possible additions to include on the homepage.

-03/07/2024- Tried to incorporate copyright date using new Date() method with JavaScript. I thought I couldn't use document.getElementById() since I was planning to set all the pages with the copyright date and I was using the same id. So, I tried using document.QuerySelectorAll and also document.getElementsByClassName and nothing was working. Eventually, I realized that apparently ids are supposed to be used only once per page not document. I rewrote my code and used template literal to write out the message while being able to include the currentYear variable containing the new Date() method. I was able to successfully copy and paste my copyright code to each page.

-03/10/2024- I felt like the website was too block-ish, so I rounded the corners of the sections using the border-radius. I also added a little quiz with three questions to decide if this is the website for the user. I struggled with the JavaScript for this because when I clicked on the yes/no buttons, I tried to put an if/else statement to keep count of the answers and if it was a certain number, then it was supposed to say whether or not this site was for the user. I'll have to work on fixing it later when I understand more about DOM Manipulation.


