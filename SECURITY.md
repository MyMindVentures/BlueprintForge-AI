# Security Policy

## Reporting security issues

Please do not open public GitHub issues for security vulnerabilities, exposed secrets, credentials, private company data, private app blueprints, or confidential business data.

Instead, contact the maintainer privately through the GitHub profile or another private channel.

---

## Do not commit secrets

Never commit:

- API keys
- access tokens
- private keys
- database URLs
- production credentials
- real customer data
- private company lists
- real bid data
- confidential app blueprints
- private legal templates

Use `.env.local` for local secrets.

---

## Protected information boundary

The BlueprintForge AI platform is open source.

Future niche app blueprints, confidential company campaigns, private legal agreements, real company prospect lists, real revenue data, and private opportunity documents are not automatically open source.

---

## Security expectations for contributors

Contributors should:

- avoid hardcoded secrets
- avoid logging sensitive data
- validate user input
- respect role-based access assumptions
- avoid exposing protected data in public UI states
- avoid including private business data in examples
- use safe mock data

---

## Sensitive examples

When building example screens, use mock data such as:

- Demo Creator
- Demo Builder
- Example Company
- Sample Concept
- Demo Bid

Do not use real prospects or private concepts.

---

## Responsible disclosure

If you find a vulnerability, please include:

- summary
- affected area
- reproduction steps
- potential impact
- suggested fix if available

Thank you for helping keep BlueprintForge AI safe.