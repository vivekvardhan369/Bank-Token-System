# Bank Token System

## Overview

The **Bank Token System** is a web application designed to manage and streamline the process of generating and calling tokens in a bank. This system enhances accessibility by incorporating voice announcements, ensuring that customers are promptly informed when their token is called.

---

## Features

- **Token Generation**: Users can generate tokens by entering their name.
- **Voice Announcements**: Speech synthesis announces the token number and the counter it should go to.
- **Counter Management**: Supports multiple counters, each with its own queue.
- **Responsive Design**: User-friendly and adaptable to various devices.

---

## Voice Accessibility

A standout feature of this project is **voice accessibility**, ensuring customers are promptly informed when their token is called. This greatly enhances the user experience, especially for individuals with visual impairments.

### How It Works

1. **Token Generation**:

   - Users generate a token by entering their name.
   - The token is added to the respective queue.

2. **Calling a Token**:

   - A counter calls a token.
   - The system uses the Web Speech API to announce the token number and the counter.

3. **Voice Announcement**:

   - The system uses the `SpeechSynthesisUtterance` object to convert text to speech.

### Example

When a token is called, the system announces:

> "John Doe, please go to Counter 1"

This ensures customers are aware of their turn, even if they are not actively looking at the screen.

---

## Installation

### Prerequisites

Ensure you have Node.js and npm installed on your machine.

### Steps

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-username/bank-token-system.git
   ```

2. **Navigate to the Project Directory**:

   ```bash
   cd bank-token-system
   ```

3. **Install Dependencies**:

   ```bash
   npm install
   ```

4. **Build Tailwind CSS**:

   ```bash
   npx tailwindcss -i ./styles.css -o ./output.css --watch
   ```

---

## Usage

1. Open `index.html` in your web browser.
2. Click on the **Generate Token** button to create a new token.
3. Enter the user's name when prompted.
4. Use the **Call Customer** buttons to call the next token for each counter.

---

## Technologies Used

- **HTML**: Provides the structure of the web application.
- **CSS (Tailwind CSS)**: Styles the application with a utility-first framework.
- **JavaScript**: Implements functionality and logic.
- **Web Speech API**: Enables voice announcements.

---

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Submit a pull request with a detailed explanation of your changes.

---

## License

This project is licensed under the **MIT License**. See the `LICENSE` file for details.

---

## Acknowledgements

- Thanks to the developers of **Tailwind CSS** for their utility-first CSS framework.
- Appreciation to the contributors of the **Web Speech API** for enabling voice accessibility features.
