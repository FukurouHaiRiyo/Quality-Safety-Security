
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
| valid     | Does this email address appear valid?       | boolean |
| spam_trap_score| Confidence level of the email address being an active SPAM trap            | string  |
| fraud_score| The overall Fraud Score of the user based on the email's reputation and recent behavior across the IPQS threat network| float


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





## Documentation

[Documentation](https://www.ipqualityscore.com/documentation/overview)


## FAQ

#### 1. Does this app collect and store any data?

No, this app doesn't collect and doesn't store any data and personal information. Please check https://www.ipqualityscore.com/ for more information.


#### 2. Does this app display, store and collect any personal information?

No, this app doesn't display, store and collect any personal information.
Please check https://www.ipqualityscore.com/ for more information.


#### 3. What does this app show me?

This app will show you hwo trust worthy are emails, phone numbers and links.

# qss
# qss
# qss
