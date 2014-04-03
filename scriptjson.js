function LoadJSONdata(){
var employees = [
  {"language": {
    "name": "default",
    "baseLanguageIfAny": "",
    "country": "",
    "direction": "TBB/LTR",
    "orthographyType": "ALPHABET",
    "numeralSystem": "ARABIC"
  },
  "lexicon": {
    "language": "default",
    "country": null,
    "entries": [
      {
        "key": "_WELCOME_MESSAGE_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "Welcome to the"
      },
      {
        "key": "_WELCOME_MALL_TITLE_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "SavingStar Cashback Mall"
      },
      {
        "key": "_WELCOME_MALL_SUB_TITLE_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": ""
      },
      {
        "key": "_SELECT_AT_LEAST_KEY_",
        "lexicalClass": "noun",
        "description": "",
        "additionalProperties": "{}",
        "translation": "Select at least"
      },
      {
        "key": "_WELCOME_PAGE_TEXT_KEY_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "of your favorite stores to personalize your home page."
      },
      {
        "key": "_SIMPLY_CLICK_KEY_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "Simply click the stars"
      },
      {
        "key": "_AT_KEY_",
        "lexicalClass": "preposition",
        "description": "ï¿½ at the door ï¿½",
        "additionalProperties": "",
        "translation": "at"
      },
      {
        "key": "_IN_KEY_",
        "lexicalClass": "preposition",
        "description": "in the car",
        "additionalProperties": "",
        "translation": "in"
      },
      {
        "key": "_TO_KEY_",
        "lexicalClass": "preposition",
        "description": "... to add ...",
        "additionalProperties": "",
        "translation": "to"
      },
      {
        "key": "_SELECT_FAV_STORES_KEY_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "to select your favorite stores"
      },
      {
        "key": "_ADD_OR_REMOVE_KEY_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "add or remove stores from your home page"
      },
      {
        "key": "_YOUR_FEATURED_STORES_KEY_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "Your Featured Stores"
      },
      {
        "key": "_START_SHOPPING_BTN_KEY_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "START SHOPPING"
      },
      {
        "key": "_ADD_",
        "lexicalClass": "verb",
        "description": "add stores",
        "additionalProperties": "",
        "translation": "Add"
      },
      {
        "key": "_OR_MORE_STORES_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "or more stores."
      },
      {
        "key": "_STAR_SHOPPING_OR_SELECT_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "Start shopping or continue selecting"
      },
      {
        "key": "_CURRENT_SELECTIONS_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "Current selections:"
      },
      {
        "key": "_NONE_SELECTED_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "(none selected)"
      },
      {
        "key": "_REMIND_ME_LATER",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "Remind me later"
      },
      {
        "key": "_SEARCH_FOR_FAV_STORES_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "Search for favorite stores"
      },
      {
        "key": "_SEARCH_FIELD_PLACEHOLDER_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "Search thousands of deals and over 500 stores"
      },
      {
        "key": "_SEARCH_",
        "lexicalClass": "",
        "description": "search",
        "additionalProperties": "",
        "translation": "Search"
      },
      {
        "key": "_SHOP_BY_CATEGORY_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "Shop by Category"
      },
      {
        "key": "_MENU_SHOP_DEALS_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "Shop Deals"
      },
      {
        "key": "_MENU_SHOP_DEALS_TITLE_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "Shop Deals"
      },
      {
        "key": "_MENU_MALL_HOME_FAV_",
        "lexicalClass": "",
        "description": "this text will show after the user has selected favorites",
        "additionalProperties": "",
        "translation": "Mall Home"
      },
      {
        "key": "_MENU_MALL_HOME_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "Mall Home"
      },
      {
        "key": "_MENU_MALL_HOME_TITLE_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "Cashback Mall"
      },
      {
        "key": "_MENU_COUPON_CODES_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "Coupon Codes"
      },
      {
        "key": "_MENU_COUPON_CODES_TITLE_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "Coupon Codes"
      },
      {
        "key": "_MENU_FREE_SHIPPING_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "Free Shipping"
      },
      {
        "key": "_MENU_FREE_SHIPPING_TITLE_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "Free Shipping"
      },
      {
        "key": "_MENU_SALES_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "Sales"
      },
      {
        "key": "_MENU_SALES_TITLE_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "Sales"
      },
      {
        "key": "_MENU_SPECIAL_OFFERS_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "Special Offers"
      },
      {
        "key": "_MENU_SPECIAL_OFFERS_TITLE_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "Special Offers"
      },
      {
        "key": "_STORES_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "Stores"
      },
      {
        "key": "_MENU_STORES_TITLE_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "Shop Stores"
      },
      {
        "key": "_FEATURED_STORES_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "Featured Stores"
      },
      {
        "key": "_MENU_FEATURED_STORES_TITLE_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "Featured Stores"
      },
      {
        "key": "_FAVORITE_STORES_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "My Favorite Stores"
      },
      {
        "key": "_MENU_FAVORITE_STORES_TITLE_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "My Favorite Stores"
      },
      {
        "key": "_ALL_STORES_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "All Stores"
      },
      {
        "key": "_MENU_ALL_STORES_TITLE_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "All Stores"
      },
      {
        "key": "_MENU_FAQ_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "FAQs"
      },
      {
        "key": "_MENU_PRIVACY_POLICY_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "Privacy Policy"
      },
      {
        "key": "_MENU_LEARN_MORE_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "Learn More Menu",
        "translation": ""
      },
      {
        "key": "_MENU_LEARN_MORE_TITLE_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "Learn More Menu Title",
        "translation": " "
      },
      {
        "key": "_MENU_DOWNLOAD_TOOLBAR_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": ""
      },
      {
        "key": "_MENU_DOWNLOAD_TOOLBAR_TITLE_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": ""
      },
      {
        "key": "_WELCOME_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "Welcome"
      },
      {
        "key": "_EDIT_SETTINGS_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "Edit your settings"
      },
      {
        "key": "_COUPON_CODES_PAGE_TITLE_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "Coupon Codes"
      },
      {
        "key": "_FREE_SHIPPING_PAGE_TITLE_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "Free Shipping"
      },
      {
        "key": "_SALE_PAGE_TITLE_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "Sale"
      },
      {
        "key": "_SPECIAL_OFFERS_PAGE_TITLE_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "Special Offers"
      },
      {
        "key": "_ALL_DEALS_PAGE_TITLE_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "All Deals"
      },
      {
        "key": "_COUPON_CODES_TILE_TITLE_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "Coupon Code"
      },
      {
        "key": "_FREE_SHIPPING_TILE_TITLE_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "Free Shipping"
      },
      {
        "key": "_SALE_TILE_TITLE_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "Sale"
      },
      {
        "key": "_SPECIAL_OFFERS_TILE_TITLE_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "Special Offer"
      },
      {
        "key": "_EXPIRES_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "Expires:"
      },
      {
        "key": "_SHOP_NOW_BTN_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "Shop now"
      },
      {
        "key": "_MORE_FROM_RETAILER_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "More Deals from this Brand"
      },
      {
        "key": "_SEE_STORE_DETAILS_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "See Store Details"
      },
      {
        "key": "_COUPON_CODE_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "Coupon Code:"
      },
      {
        "key": "_SORT_BY_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "Sort by"
      },
      {
        "key": "_EXPIRATION_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "Expiration"
      },
      {
        "key": "_LIST_VIEW_SWITCH_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "Switch to list view"
      },
      {
        "key": "_LIST_TILE_SWITCH_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "Switch to tile view"
      },
      {
        "key": "_STORES_TAB_TITLE_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "Filter Results by Store"
      },
      {
        "key": "_DEALS_TAB_TITLE_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "Filter Results by Deal"
      },
      {
        "key": "_DEALS_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "Deals"
      },
      {
        "key": "_BACK_TO_TOP_TITLE_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "Back to top"
      },
      {
        "key": "_NO_MATCHES_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "We're sorry, there are no"
      },
      {
        "key": "_MATCHES_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "matches"
      },
      {
        "key": "_BACK_TO_HOME_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "Back to Mall Home"
      },
      {
        "key": "_VIEW_RESTRICTIONS_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "View Restrictions"
      },
      {
        "key": "_SHOW_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "Show"
      },
      {
        "key": "_HIDE_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "Hide"
      },
      {
        "key": "_ON_THE_WAY_TO_EARN_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "You are on your way to earning"
      },
      {
        "key": "_REDIRECT_MSG_1_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "The cashback you earn from any purchases at"
      },
      {
        "key": "_REDIRECT_MSG_2_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "will post to your "
      },
      {
        "key": "_REDIRECT_MSG_3_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "If you are not redirected to"
      },
      {
        "key": "_SETTINGS_TITLE_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "Edit my favorite stores"
      },
      {
        "key": "_SETTINGS_SAVE_BTN_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "Save Changes"
      },
      {
        "key": "_SECONDS_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "seconds"
      },
      {
        "key": "_CLICK_HERE_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "click here"
      },
      {
        "key": "_COPY_THIS_CODE_1_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "Copy this coupon code:"
      },
      {
        "key": "_COPY_THIS_CODE_2_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "Then, paste it at checkout when you are done shopping."
      },
      {
        "key": "_SEARCH_RESULTS_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "Search Results For:"
      },
      {
        "key": "_AZ_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "A-Z"
      },
      {
        "key": "_ZA_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "Z-A"
      },
      {
        "key": "_FAQ_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "Frequently Asked Questions (FAQ)"
      },
      {
        "key": "_FAQ_1_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "How do I earn cashback through the SavingStar Cashback Mall?"
      },
      {
        "key": "_FAQ_2_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "How long do my SavingStar Cashback Mall & toolbar rewards take to post to my account?"
      },
      {
        "key": "_FAQ_3_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "How do I earn cashback through the SavingStar Cashback Toolbar?"
      },
      {
        "key": "_FAQ_4_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "Do all purchases qualify for cashback?"
      },
      {
        "key": "_FAQ_5_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "What browsers is the toolbar compatible with?"
      },
      {
        "key": "_FAQ_6_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "How do returns affect my cashback?"
      },
      {
        "key": "_FAQ_7_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "What do I do if my rewards do not appear in my account?"
      },
      {
        "key": "_FAQ_8_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "Can I earn rewards for a purchase if I did not begin my purchase on the SavingStar Cashback Mall or through the Cashback Toolbar?"
      },
      {
        "key": "_FAQ_9_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "Do I need to have cookies enabled to get credit for purchases?"
      },
      {
        "key": "_FAQ_10_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "Do I need to be logged in to SavingStar to get credit for my purchases?"
      },
      {
        "key": "_FAQ_11_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "What if I have a problem installing the toolbar?"
      },
      {
        "key": "_FAQ_12_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "How do I uninstall the toolbar?"
      },
      {
        "key": "_FAQ_13_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "Where can I find a list of participating SavingStar Cashback Mall brands?"
      },
      {
        "key": "_FAQ_14_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "Can I use coupon codes I find elsewhere online when I make purchases through the SavingStar Cashback Mall or Toolbar?"
      },
      {
        "key": "_FAQ_15_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "Can I earn rewards on gift cards?"
      },
      {
        "key": "_FAQ_16_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "What information does the SavingStar Cashback Toolbar track?"
      },
      {
        "key": "_FAQ_17_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "Do SavingStar Cashback Mall participating brands change?"
      },
      {
        "key": "_ANSWER_1_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "You must first be logged into SavingStar and start your purchase by clicking through a brand link in the SavingStar Cashback Mall and then completing a qualifying purchase on that brand site. <br><br>If you have the SavingStar Cashback Toolbar installed, you do not need to click through a link on the mall. The indicator in the toolbar will notify you when you are visiting a site where you are eligible to save. Please note, some brands require you to click before you earn. "
      },
      {
        "key": "_ANSWER_2_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "Most purchases post to your account within 10 days of purchase, though some may take up to 8 weeks. Travel rewards will not post until your travel dates have passed. Rewards will be available to payout from your account 30 days after they post."
      },
      {
        "key": "_ANSWER_3_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "Once you install the toolbar, you will be notified by the green indicator in the toolbar when you visit a brand site where you are automatically eligible to earn. Please note, some brands require you to click before you earn. <br><br>You can install the toolbar <a href=\"https://savingstar.com/toolbar\" target=\"_blank\">here</a>."
      },
      {
        "key": "_ANSWER_4_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "Most purchases qualify for cashback. However, purchases that qualify for cashback vary by brand. To see restrictions for any brand, go to their Store Details page and click View Restrictions or click on the Restrictions link in the toolbar when you are visiting a participating brand's site."
      },
      {
        "key": "_ANSWER_5_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "The SavingStar Toolbar currently works with Internet Explorer 8+, Chrome 25+ and Firefox 19+ on Windows, and Firefox 19+ on Macintosh operating systems. The SavingStar Toolbar does not currently work on mobile devices such as smartphones and tablets."
      },
      {
        "key": "_ANSWER_6_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "Returned items will cause rewards to be debited from your account."
      },
      {
        "key": "_ANSWER_7_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "While most transactions post within 10 days of purchase, it may take up to 8-10 weeks for a purchase to appear in your account. If that time has passed, please contact us <a href=\"https://savingstar.com/contact/\" target=\"_blank\">here</a> and let us know your SavingStar email address, the brand name, order number, date of purchase and purchase amount (not including taxes or shipping)."
      },
      {
        "key": "_ANSWER_8_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "No, you must begin your purchase from the SavingStar Cashback Mall or have the SavingStar Cashback Toolbar installed."
      },
      {
        "key": "_ANSWER_9_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "Yes, you must have cookies enabled in your browser to earn rewards."
      },
      {
        "key": "_ANSWER_10_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "Yes, you must be logged in to SavingStar to get credit for your purchases or have the toolbar installed with the indicator showing that you are eligible to earn rewards."
      },
      {
        "key": "_ANSWER_11_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "If you are unable to install the Toolbar and are receiving strange errors, you may not have administrator privileges on your computer. Be sure that you are logged in as the computer's administrator when downloading and installing the toolbar. "
      },
      {
        "key": "_ANSWER_12_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "<b>Uninstalling the SavingStar Toolbar using Internet Explorer</b><br>Go to the \"Start\" menu, select \"Control Panel,\" go to \"Add/Remove Programs\" and remove the SavingStar Toolbar that you no longer want. Once you have removed the SavingStar Toolbar, restart your computer.<br><br>\r<b>Uninstalling the SavingStar Toolbar using Firefox</b><br>Go to \"Tools\" and click on \"Add-ons.\" Highlight \"delete the application \"SavingStar Toolbar\" and click \"Remove\".<br><br>\r<b>Uninstalling the SavingStar Toolbar using Chrome</b><br>Click on the Chrome menu button near the top right of your Chrome browser. Then Select \"Tools\" and then Extensions. Highlight the \"SavingStar Toolbar\" and click on the \"Remove\" button.\r"
      },
      {
        "key": "_ANSWER_13_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "To find the full list of participating online brands, visit the Browse by Brands or All Brands link located on the SavingStar Cashback Mall."
      },
      {
        "key": "_ANSWER_14_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "No. If you use coupon codes not found on the SavingStar Cashback Mall, it will make your purchase ineligible for a reward."
      },
      {
        "key": "_ANSWER_15_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "Typically no. On the Store Details page you can click View Restrictions to see specific restrictions for any brand."
      },
      {
        "key": "_ANSWER_16_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "When you visit a participating merchant, a unique identifier is assigned to that visit.  This 'click ID' allows transactions to be attributed to you when/if a transaction is later reported by a merchant. At that time the following information is recorded and used to track & calculate your reward: a unique non-personally identifiable account ID, a unique install identifier, an ID identifying SavingStar to our third-party rewards provider, the merchant ID, and the commission rate at the time the merchant activation took place.<br><br>\r\rWhen you complete a shopping transaction, the following information is used to track & calculate your reward:\rThe previously assigned 'click ID' (see above), the merchant ID, a transaction ID, purchase amount, commission amount, and in some cases, product category or SKU-level information.\r\r"
      },
      {
        "key": "_ANSWER_17_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "Yes. We add brands on a regular basis and occasionally remove brands."
      },
      {
        "key": "_ALL_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "All"
      },
      {
        "key": "_ACCOUNT_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "account"
      },
      {
        "key": "_SHOW_MORE_RESULTS_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "Show More Results"
      },
      {
        "key": "_CONTINUE_SHOPPING_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "Continue Shopping"
      },
      {
        "key": "_ENABLE_POPUPS_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "For a better shopping experience, please enable pop-ups for"
      },
      {
        "key": "_NO_PAGE_FOUND_",
        "lexicalClass": "",
        "description": "",
        "additionalProperties": "",
        "translation": "We're sorry but we couldn't find the page you are looking for. We've got this incident logged now."
      }
    ],
    "dateformats": {
      "MONTH": [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
      "SHORTMONTH": [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ],
      "DAY": [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "SHORTDAY": [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
      ],
      "AMPMS": [
        "AM",
        "PM"
      ],
      "medium": "MMM d, y h:mm:ss a",
      "short": "M/d/yy h:mm a",
      "fullDate": "EEE, MMMM d, y",
      "longDate": "MMMM d, y",
      "mediumDate": "MM-dd-yyyy",
      "shortDate": "M/d/yy",
      "mediumTime": "h:mm:ss a",
      "shortTime": "h:mm a"
    }
  }
}];


document.getElementById("json_data").innerHTML=employees[0].lexicon.entries[20].translation;
}
document.querySelector("#json_data").addEventListener("click", LoadJSONdata, false);