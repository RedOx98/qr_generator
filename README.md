# QR Business Card Project

## Project Overview
The QR Business Card project helps banks reduce the need for printing physical business cards, cutting costs and minimizing environmental pollution. This digital solution generates a QR code that, when scanned, automatically saves the contact information to the scanner's phonebook.

## Key Features
- Generate QR codes for business contact information
- Scan QR codes with a mobile device
- Automatically save scanned contact details to the phonebook
- Reduce costs associated with printing physical cards
- Promote environmentally-friendly business practices

## Figma Design
[Click here to view the Figma design for desktop view](#) *([Web](https://www.figma.com/design/ZqKVxeEeykysmEKu1rV4ZD/E-Business-Card-Portal?m=auto&t=AiNMKmtzH0vb6Fod-6))*
[Click here to view the Figma design for mobile view](#) *([Mobile]([https://www.figma.com/design/ZqKVxeEeykysmEKu1rV4ZD/E-Business-Card-Portal?m=auto&t=AiNMKmtzH0vb6Fod-6](https://www.figma.com/proto/ZqKVxeEeykysmEKu1rV4ZD?node-id=346-8&t=AiNMKmtzH0vb6Fod-6)))*

## Business Requirement Document (BRD)
[Access the Business Requirement Document](#) *([BRD](https://ecobank.sharepoint.com/:w:/r/sites/ENGFileServer/Technology/QR_Business%20Card/BRD%20-QR%20CODE%20COMPIMENTARY%20CARD%20GENERATOR%20EBS.doc?d=w6322836d0a934c20a816f9535057c9bd&csf=1&web=1&e=w8GMW0))*

## How to Run the Project

### Prerequisites
Ensure you have the following installed:
- Node.js (v18 or higher)
- npm or yarn
- Next.js

### Setup Steps
1. Clone the repository:
    ```bash
    git clone https://github.com/RedOx98/qr_generator.git
    cd qr_generator
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Run the development server:
    ```bash
    npm run dev
    ```
4. Open the application in your browser:
    ```
    http://localhost:3000
    ```

### Production Build
```bash
npm run build
npm start
```

## Usage
1. Enter the contact information.
2. Generate a QR code.
3. Share or print the QR code.
4. Anyone can scan the code with their phone to automatically save the contact info.

## Environment Variables
Create a `.env` file in the root directory with the necessary variables:
```
NEXT_PUBLIC_API_URL=<your_api_url>
```

## Contributing
1. Fork the repository.
2. Create a new branch.
3. Commit your changes.
4. Open a pull request.

## License
This project is licensed under the [MIT License](LICENSE).
