# MOOD FOOD

## Summary

MOOD FOOD is an application created using React, React Hooks, Context API and React Router. The Routes were setup for one default page and three more pages. Axios and fetch were used to fetch data from three APIS: Advice Slip JSON API, Wikipedia API and YouTube API.

**About**
MOOD FOOD is an app designed to respond to your current mood with activity suggestions. The app uses eight key emotions derived from the Wheel of Emotions by American psychologist Robert Plutchik.

The app's theme adapts to both the time of day (morning, afternoon, evening) and the user's mood (happy, relaxed, fearful, astonished, sad, frustrated, angry, excited). The background color transitions dynamically into a vibrant linear gradient: the top color reflects the mood (using colors psychologically associated with the specific emotion), while the bottom color represents the time of day (employing various shades of blue). Additionally, the app provides a time-of-day-specific greeting.

After the user has chosen his mood it is displayed on screen and the user gets three options from which he can choose one: get some music according to the current mood, get an advice or learn more about the respective mood.

## Key Features

### Time of the Day
Determine the Time of Day: Used JavaScript Date Object to get the current time and determine whether it's morning, afternoon, or evening. Dynamic Greeting depending on the time of the day.

### Mood Picker
**Get Mood of user from form element**: user picks one of eight moods from a select menu. Moods are associated with according colors.

### Conditional Rendering
**Set Up Conditional Rendering**: Based on the time of day and the current mood value, the background is rendered conditionally in different color gradients.

### Activity Choice
Set up three options: the user can choose to retrieve info from three APIs:

1. Play some Music: based on the current mood of the user a search term is generated to search a corresponding playlist on YouTube (example: mood = sad, search term for YouTube would be "uplifting songs"). Here the YouTube API with an API key was used.
2. Give Advice : the user gets a random advice from Advice Slip JSON API.
3. Tell me something about the specific mood: the current mood is passed to the Wikipedia search and the result from Wikipedia API is displayed on a new route.

### Used Techniques

- React
- React Router
- React Hooks
- Context API
- Advice Slip JSON API, Wikipedia API and YouTube API
- React Player
- Tailwind CSS
