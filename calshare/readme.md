# Calendar Event Share

Calendar Event Share is a simple, user-friendly web application that allows you to create and share calendar events without the need for email addresses or specific calendar applications.

![Calendar Event Share Screenshot](https://your-screenshot-url-here.png)

## Features

- **Easy Event Creation**: Quickly input event details including title, description, location, start time, and end time.
- **ICS File Generation**: Automatically creates ICS (iCalendar) files compatible with most calendar applications.
- **Flexible Sharing Options**: 
  - Download the ICS file directly
  - Share the event link via the Web Share API (on supported browsers)
  - Copy a shareable link to the clipboard
- **URL Parameter Support**: Pre-fill event details or trigger automatic downloads using URL parameters.

## How It Works

1. Fill in the event details in the form.
2. Click "Download" to get the ICS file, or use "Share" to send the event link.
3. Recipients can open the link to download the ICS file and add the event to their calendar.

## Technologies Used

- HTML5
- CSS3 (with Bootstrap for responsive design)
- JavaScript (ES6+)
- jQuery
- Moment.js for date/time handling
- Custom ICS.js library for creating iCalendar files

## Setup

1. Clone this repository:
   ```
   git clone https://github.com/yourusername/calendar-event-share.git
   ```
2. Open `index.html` in your web browser.

No server-side setup is required as this is a client-side application.

## Usage

### Basic Use
Simply fill out the form and click "Download" or "Share".

### Advanced: URL Parameters
You can pre-fill the form or trigger an automatic download using URL parameters:

```
https://yourdomain.com/index.html?title=Meeting&desc=Team%20Sync&loc=Conference%20Room&fromtime=2023-09-15T10:00&totime=2023-09-15T11:00&download
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.



## Contact

Created by [@GuyLouzon](https://twitter.com/@Guylouzon)

---

Feel free to star ⭐ this repo if you find it useful!
