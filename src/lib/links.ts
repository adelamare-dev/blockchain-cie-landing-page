/**
 * Outbound links.
 *
 * Both destinations are third parties. They are declared once here so the
 * booking link can be changed in a single place, and so tests can assert that
 * every primary call to action points at the same cleaned URL.
 */

/**
 * Booking link. Opens in the same tab, with no campaign UTM appended: campaign
 * specific links live as separate URLs so this one stays canonical.
 */
export const CALENDLY_URL = "https://bit.ly/antoine-quickcall";

export const CONTACT_EMAIL = "contact@blockchain-cie.com";

export const CONTACT_MAILTO = `mailto:${CONTACT_EMAIL}`;
