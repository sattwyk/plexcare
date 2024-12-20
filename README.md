# Plexcare

This project is a comprehensive Healthcare Management System developed for the BITS Pilani Postman API Hackathon 4.0. It integrates various features to streamline patient care and hospital management using APIs.

## Features

1. **Nearby Hospital Locator**
   - Interactive map displaying nearby hospitals
   - Hospital details including name, address, and contact information
   - Utilizes mapping and location APIs

2. **User Login and Health Data Storage**
   - Secure user account creation and login
   - Storage and management of user health details
   - Integration with authentication APIs

3. **Access to Health Records**
   - View medical history, prescriptions, and lab results
   - Aggregation of data from multiple healthcare providers
   - Integration with EHR and FHIR APIs

4. **Appointment Scheduling**
   - Book, reschedule, or cancel appointments
   - Display of available time slots
   - Integration with appointment and scheduling APIs

## Tech Stack

[List the technologies, frameworks, and libraries used in your project]

## API Integration

This project demonstrates efficient use of the Postman API platform for interacting with external APIs. The following APIs have been integrated:

- [List the specific APIs used in your project]

## Installation


1. Install Nix

```bash
sh <(curl -L https://nixos.org/nix/install) --daemon
```

2. Edit nix.conf:
Add the following lines to your /etc/nix/nix.conf file:
```bash
experimental-features = nix-command flakes
```
- use sudo vi to edit the file

3. Set Environment Variable:
Alternatively, you can set an environment variable in your shell configuration file (e.g., .bashrc or .zshrc):
```bash
export NIX_CONFIG="experimental-features = nix-command flakes"
```

4. Nix Develop
```bash
nix develop
```

## Usage

[Explain how to use your application, including any necessary commands or user instructions]

## Demo

A video demonstration of this project can be found [here](insert_youtube_link).

## Documentation

For more details about the development process and challenges faced, please read our [Medium article](insert_medium_article_link).


## Postman Collection

Access our public Postman collection [here](insert_postman_collection_url).

## Team Members

- [Pratyush](https://github.com/PratyushMT)
- [Sattwik](https://github.com/sattwyk)
- [Abhishek](https://github.com/N1TR0-afk)

