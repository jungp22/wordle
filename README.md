# Wordle
Enjoy the famous NYT puzzle clone made with HTML, CSS, and JavaScript.

Link to puzzle: https://jungp22-wordle.netlify.app/


<img width="720" alt="image" src="https://github.com/user-attachments/assets/4a809ab6-9572-486b-b020-417da6d4bc4a" />
<img width="720" alt="image" src="https://github.com/user-attachments/assets/05870f06-7573-45c8-ad72-749b445bcf68" />
<img width="720" alt="image" src="https://github.com/user-attachments/assets/12d16ba6-1478-4c61-bcb8-0feb73b1e0de" />


## Note
I was planning to use an API for the dictionary. However the one I was planning to use went offline. To rectify that I have made a temporary dictionary object in the javascript code, based on the original endpoint. This means I didn't use async/await functions.

## Future steps
I want to eventually deploy an API so I can display that knowledge of working with APIs. Additional stuff include:
- The `Start Over` button should become `disabled` while the code is getting the dictionary from the endpoint for the first time, and say `Loading...`.
- If a user hits the `Enter` key while the word is not complete, the page should alert the user to finish the word first. You can use `window.alert("first complete the word")` for this
- Yellow background logic isn't implemented the way it is typically implemented
