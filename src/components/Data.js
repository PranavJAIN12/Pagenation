const data =[
    {
      "domain": "example.com",
      "name": "Example Corp",
      "score": 85,
      "public_email": "contact@example.com",
      "phones": ["+1-555-1234", "+1-555-5678"],
      "url": "https://example.com",
      "country": "United States"
    },
    {
      "domain": "techworld.io",
      "name": "Tech World",
      "score": 92,
      "public_email": "support@techworld.io",
      "phones": ["+44-20-7946-0958"],
      "url": "https://techworld.io",
      "country": "United Kingdom"
    },
    {
      "domain": "innovate.com",
      "name": "Innovate Labs",
      "score": 78,
      "public_email": "info@innovate.com",
      "phones": ["+91-9876543210"],
      "url": "https://innovate.com",
      "country": "India"
    },
    {
      "domain": "greentech.net",
      "name": "GreenTech Solutions",
      "score": 88,
      "public_email": "hello@greentech.net",
      "phones": ["+61-3-8376-6284"],
      "url": "https://greentech.net",
      "country": "Australia"
    },
    {
      "domain": "healthcareplus.org",
      "name": "Healthcare Plus",
      "score": 91,
      "public_email": "contact@healthcareplus.org",
      "phones": ["+49-30-5678-1234"],
      "url": "https://healthcareplus.org",
      "country": "Germany"
    },
    {
      "domain": "ecoshop.com",
      "name": "Eco Shop",
      "score": 75,
      "public_email": "sales@ecoshop.com",
      "phones": ["+33-1-2345-6789"],
      "url": "https://ecoshop.com",
      "country": "France"
    },
    {
      "domain": "nextlevel.io",
      "name": "Next Level Solutions",
      "score": 82,
      "public_email": "info@nextlevel.io",
      "phones": ["+81-3-1234-5678"],
      "url": "https://nextlevel.io",
      "country": "Japan"
    },
    {
      "domain": "startuphub.org",
      "name": "Startup Hub",
      "score": 89,
      "public_email": "contact@startuphub.org",
      "phones": ["+1-800-555-1212"],
      "url": "https://startuphub.org",
      "country": "Canada"
    },
    {
      "domain": "financetoday.net",
      "name": "Finance Today",
      "score": 77,
      "public_email": "support@financetoday.net",
      "phones": ["+34-91-1234-567"],
      "url": "https://financetoday.net",
      "country": "Spain"
    },
    {
      "domain": "globexcorp.com",
      "name": "Globex Corporation",
      "score": 95,
      "public_email": "admin@globexcorp.com",
      "phones": ["+1-212-555-9876"],
      "url": "https://globexcorp.com",
      "country": "United States"
    },
    {
      "domain": "smartsolutions.org",
      "name": "Smart Solutions",
      "score": 80,
      "public_email": "contact@smartsolutions.org",
      "phones": ["+39-06-1234-5678"],
      "url": "https://smartsolutions.org",
      "country": "Italy"
    },
    {
      "domain": "creativeagency.io",
      "name": "Creative Agency",
      "score": 83,
      "public_email": "support@creativeagency.io",
      "phones": ["+27-11-123-4567"],
      "url": "https://creativeagency.io",
      "country": "South Africa"
    },
    {
      "domain": "techhub.com",
      "name": "Tech Hub",
      "score": 90,
      "public_email": "info@techhub.com",
      "phones": ["+55-21-1234-5678"],
      "url": "https://techhub.com",
      "country": "Brazil"
    },
    {
      "domain": "datadrive.io",
      "name": "Data Drive",
      "score": 85,
      "public_email": "admin@datadrive.io",
      "phones": ["+65-1234-5678"],
      "url": "https://datadrive.io",
      "country": "Singapore"
    },
    {
      "domain": "alphatech.org",
      "name": "Alpha Tech",
      "score": 87,
      "public_email": "hello@alphatech.org",
      "phones": ["+86-10-1234-5678"],
      "url": "https://alphatech.org",
      "country": "China"
    },
    {
      "domain": "alpha-tech.com",
      "name": "Alpha Tech",
      "score": 78,
      "public_email": "info@alpha-tech.com",
      "phones": ["+1-800-123-4567", "+1-800-765-4321"],
      "url": "https://alpha-tech.com",
      "country": "United States"
    },
    {
      "domain": "globalvision.co",
      "name": "Global Vision",
      "score": 89,
      "public_email": "contact@globalvision.co",
      "phones": ["+44-20-1234-5678"],
      "url": "https://globalvision.co",
      "country": "United Kingdom"
    },
    {
      "domain": "byteworks.ai",
      "name": "ByteWorks AI",
      "score": 95,
      "public_email": "support@byteworks.ai",
      "phones": ["+61-2-9876-5432"],
      "url": "https://byteworks.ai",
      "country": "Australia"
    },
    {
      "domain": "meditech.health",
      "name": "MediTech Health",
      "score": 88,
      "public_email": "hello@meditech.health",
      "phones": ["+49-30-1234-5678"],
      "url": "https://meditech.health",
      "country": "Germany"
    },
    {
      "domain": "eco-energy.co",
      "name": "Eco Energy Solutions",
      "score": 82,
      "public_email": "info@eco-energy.co",
      "phones": ["+91-98765-43210"],
      "url": "https://eco-energy.co",
      "country": "India"
    },
    {
      "domain": "bluehorizon.org",
      "name": "Blue Horizon",
      "score": 87,
      "public_email": "reachout@bluehorizon.org",
      "phones": ["+33-1-2345-6789"],
      "url": "https://bluehorizon.org",
      "country": "France"
    },
    {
      "domain": "cogentech.solutions",
      "name": "Cogent Technologies",
      "score": 90,
      "public_email": "connect@cogentech.solutions",
      "phones": ["+1-303-987-6543"],
      "url": "https://cogentech.solutions",
      "country": "United States"
    },
    {
      "domain": "nextgeninnovations.com",
      "name": "NextGen Innovations",
      "score": 93,
      "public_email": "team@nextgeninnovations.com",
      "phones": ["+81-3-1234-5678"],
      "url": "https://nextgeninnovations.com",
      "country": "Japan"
    },
    {
      "domain": "orbittech.global",
      "name": "OrbitTech Global",
      "score": 86,
      "public_email": "support@orbittech.global",
      "phones": ["+65-6-7654-3210"],
      "url": "https://orbittech.global",
      "country": "Singapore"
    },
    {
      "domain": "zenith.solutions",
      "name": "Zenith Solutions",
      "score": 79,
      "public_email": "info@zenith.solutions",
      "phones": ["+55-21-1234-5678"],
      "url": "https://zenith.solutions",
      "country": "Brazil"
    }
  ]
  export default data;