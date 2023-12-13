
# QSS (Quality, Safety, Security)

This project aims to scan phone numbers, email addresses and links to ensure they're not spam, malicious or scams.




## Features

- Email Validation API - validate email addresses and analyze email reputations with real-time checks

- Phone Validation & Reputation API - validate phone numbers in any country while retrieving the risk score and recent abuse


- Malicious URL Scanner & Domain Reputation API - scan URLs and domains to identify zero-day phishing, malware, and suspicious links. Detect parked or hijacked domains and abusive links with real-time domain intelligence backed by advanced machine learning models.



## API Reference

### Email check

| Method    | Value    | Example                    |
| :-------- | :------- | :------------------------- |
| GET       | key      | ?key={key}&email=noreply@ipqualityscore.com |
| POST      | key      | key={key}&email=noreply@ipqualityscore.com  |

#### Values interpretation

| Field     | Description    | Possible Values            |
| :-------- | :-------       | :------------------------- |
| fraud_score     | The overall Fraud Score of the user based on the email's reputation and recent behavior across the IPQS threat network. Fraud Scores >= 75 are suspicious, but not necessarily fraudulent.       | float |
| recent_abuse | This value will indicate if there has been any recently verified abuse across our network for this email address            | boolean  |
| suspect | This value indicates if the mail server is currently replying with a temporary error and unable to verify the email address | boolean


### Phone check 
| Method    | Value    | Example                    |
| :-------- | :------- | :------------------------- |
| GET       | key      | ?key={key}&phone=18007132618 |
| POST      | key      | key={key}&phone=18007132618  |


#### Values interpretation

| Field     | Description    | Possible Values            |
| :-------- | :-------       | :------------------------- |
| valid     | Is the phone number properly formatted and considered valid       | boolean |
| active | Is this phone number a live usable phone number that is currently active?| boolean, null
| fraud_score | The IPQS risk score which estimates how likely a phone number is to be fraudulent| float
| recent_abuse | Has this phone number been associated with recent or ongoing fraud?| boolean, null
| risky| Is this phone number associated with fraudulent activity, scams, robo calls, fake accounts, or other unfriendly behavior?| boolean, null
| spammer | Indicates if the phone number has recently been reported for spam or harassing calls/texts. | boolean





## Documentation

[Documentation](https://www.ipqualityscore.com/documentation/overview)


## FAQ

#### 1. Does this app collect and store any data?

No, this app doesn't collect and doesn't store any data and personal information. Please check https://www.ipqualityscore.com/ for more information.


#### 2. Does this app display, store and collect any personal information?

No, this app doesn't display, store and collect any personal information.
Please check https://www.ipqualityscore.com/ for more information.


#### 3. What does this app show me?

This app will show you how trustworthy are emails, phone numbers and links.



## Run Locally

Clone the project

```bash
  git clone https://github.com/FukurouHaiRiyo/Quality-Safety-Security
```

Go to the project directory

```bash
  cd Quality-Safety-Security
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npx expo start
```

Make sure you have expo installed. Install it by looking at Expo's documentation [here](https://docs.expo.dev/get-started/installation/)


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://andreistefan.vercel.app/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/andrei-stefan-panait/)

