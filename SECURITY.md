# Security Policy

BlueprintForge AI contains concepts around protected blueprints, staged access, agreements, watermarks, logs, company bid rooms, and builder build packs.

This repository is currently public and should not contain private app blueprints, secrets, production credentials, customer data, or confidential company material.

## Reporting security issues

If you find a security issue, please do not exploit it or publish sensitive details publicly.

Open a minimal GitHub issue if it does not expose sensitive information, or contact the repository owner through the public GitHub profile.

## Never commit

Do not commit:

- API keys;
- private tokens;
- production credentials;
- private app concepts not intended for public release;
- confidential company data;
- personal data without consent;
- signed agreements;
- payment information;
- private builder/company communications.

## Public demo safety

The public app should work safely with mock data and fallback states.

If AI, auth, database, or external providers are missing, the app should not crash. It should show a safe demo, disabled state, or setup message.

## Protected access principle

Future protected content must be enforced server-side.

Frontend hiding is not security.

Protected layers should eventually require:

- authenticated user;
- role check;
- agreement status;
- explicit layer grant;
- access logging;
- watermarking where appropriate.

## Legal and financial wording safety

Avoid unsafe claims such as:

- guaranteed revenue;
- guaranteed ROI;
- guaranteed legal proof;
- automatic lawsuits;
- claims that an app definitely does not exist anywhere.

Use careful language such as:

- evidence support;
- agreement-backed access;
- based on checked sources;
- no full-concept match found;
- revenue is not guaranteed.
