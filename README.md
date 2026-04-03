# 02250346_WEB101_PA1
Flipkart Clone — Inspiration from Flipcart
------------------------------------------
[WEB101 PA1]
--A web application built with the help of  Next.js and Tailwind CSS.--

Goal:
This practical is a front-end replica of the well-known Indian e-commerce site Flipkart. (Home-page). It emulates the fundamental shopping experience by allowing users to browse products by category, view deals, explore product details, and move between sections utilizing React's component-based structure and also uses React Icons

------------------------
HOW IT Looks and WORKS?
------------------------
Home_Page
Consists of Navigation Bar, Category Navigation, Flipcart Home, 4 sections(Deal of the day,Electronics,Fashion and Home)
Displays a sliding  banner (1200x300) (3 banner) with shopping items  images
The 4 sections — are horizontally scrollable row of featured products 
Shows Top Electronics, Fashion Picks, and Home Picks as separate product sections
Each section has a View All button that navigates to its  full-page listing
where each row (sections) has 6 picture of items,thus 24 pictures in total
All the images are in black and white colour to look good

1. Navigation Bar-- Contains Flipcart text instead of logo which takes  , a search bar,login,become a seller,cart
   
2. Category Navigation---Contains Mobiles, Electronics, Fashion, Home, Appliances and Clicking a category scrolls to the corresponding section on the home page

3. Sliding Banner---Consists 3 different banners which changes in specific time 1-->2-->3-->1-->2.......

4. 4 Sections (6 images/section)
a. Deal of the day---list of all deal products horizontally 
b. electronics —--list of all electronics products 
c. fashion —--list of all fashion products
d. home —--list of all home products with working filter buttons (All, Under ₹1000, Under ₹5000, Top Rated)
All section has a view all button which shows the specific category
All pages include a ← Back to Home button where it takes u back to Home  page

5. Product card---Clicking any product card takes you  to /product/[id (24 diff. ids)]
Shows product image, name, rating, number of reviews, price, original price, discount percentage
It also Includes Add to Cart and Buy Now buttons
Moreover it has  a ← Back to Home button like section pages

6.  Key Components
ProductCard.jsx--->Reusable card component which shows  the image, name, rating badge, price, original price, and discount. Wrapped in a Link to navigate to the product detail page.

ProductSection.jsx---> Also reusable horizontal scrollable section that accepts title, products, id, and link props. The id enables smooth scroll targeting from the category nav. The link prop controls the View All button destination.

CategoryNav.jsx---> Maps over the categories array and attaches an onClick handler that uses document.getElementById with scrollIntoView to scroll to the matching section.

product/[id]/page.jsx---> dynamic route page that receives the product id from the URL, searches across all product arrays using Array.find(), and renders the full product detail view.

7. Full Layout
   
src/
├── app/
│   ├── deals/page.jsx
│   ├── electronics/page.jsx
│   ├── fashion/page.jsx
│   ├── home/page.jsx
│   ├── product/[id]/page.jsx
│   ├── layout.js
│   └── page.jsx
├── components/
│   ├── Navbar/
│   │   ├── Navbar.jsx
│   │   ├── CategoryNav.jsx
│   │   └── SearchBar.jsx
│   ├── home/
│   │   ├── HeroBanner.jsx
│   │   └── ProductSection.jsx
│   ├── ProductCard.jsx
│   └── Footer.jsx
└── data/
    └── products.js
