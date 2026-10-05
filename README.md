# ZedCart

A mobile-first Zambian marketplace demo for discovering neighborhood businesses across all ten provinces, browsing sample products with Kwacha pricing, and walking through a delivery order.

## Run locally

No build step or package installation is needed. Open `index.html` in a browser for the demo, or run `py -m http.server 8000` and open `http://localhost:8000` to test app installation and offline caching locally.

## Install as an app

Serve the app on `localhost` while developing, or deploy it to an HTTPS host. In a supported browser, use **Install ZedCart** when prompted (or the browser's **Install app** menu). On iPhone or iPad, open the HTTPS site in Safari and choose **Share > Add to Home Screen**. The service worker caches the app shell for offline browsing after the first successful load; live photos and other external services may still need a connection.

## Demo behavior

- The app can be installed as a PWA; its shopping-cart logo and application icon are included.
- Search shops, categories, descriptions, and product names; filter by city or business category, including filling stations.
- Open a business profile for every sample listing, with its location, category, rating, delivery estimate, and product offerings.
- Add products to a single-business cart. Starting a cart from another business asks before replacing the current cart.
- Adjust quantities, clear the cart, and return to a saved cart on the same browser. Cart contents are stored locally only and are not synced across devices.
- Show an offline warning when the browser loses connectivity, with a confirmation when it comes back online.
- Review a delivery estimate, enter delivery details, optionally grant on-device browser location permission, and view a simulated ZedCart-agent delivery timeline.
- Open the account dialog to preview customer login/sign-up and business/client or admin login forms. Authentication is not connected; submitted details are not sent or saved.
- Sample merchants and Kwacha prices are illustrative, with at least one sample business represented in each province. Fuel is shown for discovery but marked station-only and cannot be added to delivery orders. No account, payment, merchant, or delivery service is connected, and checkout never sends an order.

Merchant photos and the optional typefaces are loaded from Unsplash and Google Fonts; the interface falls back to system fonts if Google Fonts are unavailable.

Publishing in the app stores would require a release workflow and store accounts. Real customer/admin/business authentication, order storage, location sharing with couriers, payments, and dispatch/tracking also require secure backend services; they are deliberately not simulated as real services here.
