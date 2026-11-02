/*
# Restrict contact_messages writes to the server function

1. Summary
- Visitors no longer insert into contact_messages directly from the browser.
- All new messages now go through the send-contact server function, which validates the input, emails the owner and then stores the record.

2. Security changes
- Removed the public INSERT policy on contact_messages.
- Revoked INSERT from anon and authenticated.
- Granted INSERT to service_role, which the server function uses. Row level security stays enabled, so no public role can read, edit or delete rows.

3. Notes
- Safe to re-run: policy drop and revoke are idempotent. No data is changed or removed.
*/

DROP POLICY IF EXISTS "anon_insert_contact_messages" ON contact_messages;
REVOKE INSERT ON contact_messages FROM anon, authenticated;
GRANT INSERT ON contact_messages TO service_role;
