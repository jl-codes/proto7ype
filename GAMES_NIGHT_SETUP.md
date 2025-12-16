# Games Night Setup Guide

## Overview
This guide explains how to set up and manage recurring Thursday Games Night events using Tito with the single event approach.

## Tito Setup (One-Time)

### 1. Create the Event in Tito Dashboard

1. Go to [ti.to/proto7ype](https://ti.to/proto7ype)
2. Click "Create Event"
3. Fill in event details:
   - **Event Name**: "PROTO7YPE Poker" (or "Games Night")
   - **Event Slug**: `proto7ype-poker` (IMPORTANT: Must match exactly)
   - **Description**: "Daily Membership for PROTO7YPE Games Night - hosted games of skill, tournament formats, and community."
   - **Location**: "San Francisco, CA" (exact address in confirmation emails only)
   - **Event Type**: Ongoing/Recurring

### 2. Configure Event Settings

**General Settings:**
- ✅ Enable "Make event public"
- ✅ Set timezone to "Pacific Time (US & Canada)"
- ✅ Configure confirmation email template with venue address

**Payment Settings:**
- Already configured: Stripe integration
- Test mode OFF for production

**Email Templates:**
- Customize confirmation email to include:
  - QR code for check-in
  - Full venue address (revealed only to purchasers)
  - Event time and date
  - House rules link
  - Contact information

### 3. Add Your First Releases (Ticket Types)

Each Thursday gets its own "Release" (ticket type):

1. Click "Add Release" in your event
2. Configure each release:
   - **Name**: "Thursday Dec 19, 2024 - 7:00 PM" (use actual date)
   - **Description**: "Daily Membership for December 19th Games Night"
   - **Quantity**: 50 (or your venue capacity)
   - **Price**: $30 (adjust as needed)
   - **On sale from**: Monday before (or earlier)
   - **On sale until**: Thursday 6:00 PM (1 hour before event)
   
3. Add releases for the next 4-8 Thursdays at once

### 4. Optional: Multi-Tier Pricing

You can create multiple releases per Thursday for tiered pricing:
- "Early Bird - Dec 19" - $25 (first 20 tickets)
- "Standard - Dec 19" - $35 (next 20 tickets)  
- "Last Minute - Dec 19" - $45 (remaining 10 tickets)

## Weekly Workflow

Every Monday (or your preferred schedule):

1. Log into [ti.to/proto7ype](https://ti.to/proto7ype)
2. Open the "proto7ype-poker" event
3. Click "Add Release"
4. Create new Thursday release:
   ```
   Name: Thursday Jan 16, 2025 - 7:00 PM
   Quantity: 50
   Price: $30
   On sale from: Now (or scheduled)
   On sale until: Thursday 6:00 PM
   ```
5. Save - it automatically appears on your /games page!

## Website Integration

The /games page automatically displays all active releases from your Tito event.

**Event URL**: `https://ti.to/proto7ype/proto7ype-poker`

**Configuration**:
- File: `config/events.ts`
- Event slug: `proto7ype/proto7ype-poker`
- Environment variable (optional): `NEXT_PUBLIC_TITO_EVENT_SLUG_GAMES`

**How it works:**
- TitoWidget component embeds the event
- Shows all currently available releases (upcoming Thursdays)
- Customers see all dates in one checkout
- No code changes needed when adding new dates

## Benefits of This Approach

✅ **One permanent URL** - `https://proto7ype.com/games` always works
✅ **Zero website updates** - Just add releases in Tito
✅ **Customer convenience** - See all upcoming dates in one place
✅ **Easy management** - Centralized in Tito dashboard
✅ **Flexible pricing** - Different prices per date if needed

## Testing

1. Create a test release for an upcoming Thursday
2. Visit `http://localhost:3000/games` (or production URL)
3. Verify the release appears in the Tito widget
4. Complete a test purchase (use Stripe test mode)
5. Check confirmation email has QR code and venue address

## Compliance Notes

The /games page includes all required no-wagering language:
- Prominent compliance block before checkout
- "Daily Membership" terminology (not "buy-in")
- Clear statement: no cash value, no rake, no wagering
- Fixed prizes (if any) independent of attendance
- House rules section

**DO NOT** use these terms anywhere:
- ❌ Buy-in
- ❌ Poker buy-in  
- ❌ Entry fee for prizes
- ❌ Wagering
- ❌ Winnings
- ❌ Pot / Rake
- ❌ Prize pool
- ❌ Rebuy

**USE** these terms instead:
- ✅ Daily Membership
- ✅ Event Admission
- ✅ Private social club access
- ✅ Games of skill
- ✅ Entertainment event
- ✅ Tournament chips have no cash value

## Support

Questions? Email: hello@proto7ype.com

## Quick Reference

| Item | Value |
|------|-------|
| Event URL | https://ti.to/proto7ype/proto7ype-poker |
| Event Slug | proto7ype-poker |
| Recurring Schedule | Every Thursday at 7:00 PM |
| Page URL | https://proto7ype.com/games |
| Navigation | Header link: "Games" |

## Future Enhancements (Optional)

### Automation via Tito API

If you want zero-touch weekly setup:

```javascript
// Example: Auto-create next 8 Thursdays
const axios = require('axios');

async function createThursdayReleases() {
  const thursdays = getNext8Thursdays();
  
  for (const date of thursdays) {
    await axios.post('https://api.tito.io/v3/proto7ype/proto7ype-poker/releases', {
      release: {
        title: `Thursday ${date.format('MMM DD, YYYY')} - 7:00 PM`,
        quantity: 50,
        price: 30.00,
        start_at: date.subtract(7, 'days'),
        end_at: date.hour(18)
      }
    }, {
      headers: { 'Authorization': `Bearer ${TITO_API_TOKEN}` }
    });
  }
}
```

### GitHub Action (Weekly Auto-Creation)

You could set up a GitHub Action that runs every Monday to auto-create the next month's Thursdays.

---

Last Updated: December 15, 2025
