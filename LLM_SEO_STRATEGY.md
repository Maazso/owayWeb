# LLM SEO Strategy for Oway

## Overview
This document outlines strategies to optimize Oway's website for LLM-based search engines (ChatGPT, Claude, Perplexity, Gemini) that crawl and cite web content.

## Why LLM SEO Matters
- **30-40% of searches** now happen via AI chatbots
- LLMs prioritize **clear, structured, authoritative content**
- Traditional SEO keywords matter less; **semantic meaning** matters more
- LLMs cite sources they can **easily parse and understand**

---

## Strategy 1: Structured Data & Semantic Markup

### Implementation Priority: HIGH

**Add Schema.org JSON-LD markup** to help LLMs understand:
- What Oway is (SoftwareApplication)
- What problems it solves
- Pricing information
- Reviews/testimonials
- FAQs

**Example markup to add:**
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "OWAY",
  "applicationCategory": "ProductivityApplication",
  "description": "AI-powered executive assistant that automates emails, schedules meetings, and handles phone calls",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "127"
  }
}
```

---

## Strategy 2: Create Rich, Conversational Content

### Implementation Priority: HIGH

LLMs favor content that **directly answers questions**. Add these content sections:

### A. FAQ Page
Create `/src/pages/faq.astro` with questions like:
- "What is OWAY and how does it work?"
- "How does OWAY compare to Calendly/Motion/Clara?"
- "Is OWAY secure? How is my data protected?"
- "What email providers does OWAY support?"
- "Can OWAY integrate with Slack, Teams, Google Calendar?"
- "How much does OWAY cost?"
- "Who is OWAY best for?"

### B. Use Cases Page
Create `/src/pages/use-cases.astro` with specific scenarios:
- "OWAY for executives managing 50+ emails daily"
- "OWAY for sales teams scheduling client calls"
- "OWAY for consultants juggling multiple time zones"

### C. Comparison Pages
Create SEO-friendly comparisons:
- "OWAY vs Motion AI"
- "OWAY vs Calendly"
- "OWAY vs hiring a virtual assistant"

---

## Strategy 3: Optimize Existing Content

### Implementation Priority: MEDIUM

**Current Issues:**
1. Hero text is short and vague
2. Features listed but not explained in depth
3. No social proof or testimonials
4. Missing "How it works" section

**Fixes:**
- Expand hero description with **clear problem → solution** narrative
- Add customer testimonials with specific results ("Saved 10 hours/week")
- Add "How it works" section with 3-step process
- Include security/privacy section (LLMs often look for this)

---

## Strategy 4: Technical SEO for LLMs

### Implementation Priority: HIGH

#### A. Fix robots.txt ✅
Currently points to correct domain:
```
User-agent: *
Allow: /

Sitemap: https://oway.live/sitemap-index.xml
```

#### B. Add OpenGraph & Twitter Meta Tags
Already present but ensure consistency across all pages.

#### C. Create /ai.txt File
Emerging standard for AI crawler instructions:
```
# Oway AI Crawler Instructions
# Contact: team@oway.live
# Purpose: AI-powered executive assistant

User-agent: *
Allow: /

# Preferred content for AI summarization
Highlight: /about
Highlight: /faq
Highlight: /use-cases
```

#### D. Semantic HTML
Use proper heading hierarchy (H1 → H2 → H3) for content structure.

---

## Strategy 5: Content Freshness & Authority

### Implementation Priority: MEDIUM

LLMs favor **recent, authoritative content**:

1. **Start a blog** with helpful content:
   - "5 ways AI assistants save executives time"
   - "Email management best practices for 2025"
   - "How to automate meeting scheduling"

2. **Add last updated dates** to pages
3. **Link to authoritative sources** (research, statistics)
4. **Get backlinks** from reputable sites

---

## Strategy 6: Make Content "Citation-Worthy"

### Implementation Priority: MEDIUM

LLMs cite content that's:
- **Factual and specific** (not marketing fluff)
- **Well-formatted** (lists, tables, clear sections)
- **Comprehensive** (answers questions fully)
- **Unique** (not generic template content)

**Action items:**
- Add specific metrics ("Saves 10+ hours/week")
- Create comparison tables
- Add detailed feature explanations
- Include case studies with real numbers

---

## Strategy 7: Optimize for Voice & Natural Language

### Implementation Priority: LOW

LLMs process natural language queries:

**Bad:** "Email automation tool calendar integration"
**Good:** "How can I automatically schedule meetings from my emails?"

**Action items:**
- Write content that answers natural questions
- Use conversational tone
- Include long-tail phrases
- Optimize for "how," "what," "why," "best" queries

---

## Strategy 8: Monitor LLM Citations

### Implementation Priority: LOW

Track when LLMs cite your site:
1. Search for "OWAY AI assistant" in ChatGPT, Claude, Perplexity
2. Check if your site appears in citations
3. Analyze what content gets cited most
4. Double down on that content format

---

## Quick Wins (Implement First)

### Week 1:
1. ✅ Fix robots.txt sitemap URL
2. ✅ Add Schema.org JSON-LD markup
3. ✅ Create FAQ page with 10+ questions
4. ✅ Add "How it works" section to homepage

### Week 2:
5. ✅ Add customer testimonials with specific results
6. ✅ Create use-cases page
7. ✅ Add security/privacy section
8. ✅ Expand feature descriptions with benefits

### Week 3:
9. ✅ Create comparison pages
10. ✅ Start blog with 3 helpful articles
11. ✅ Add ai.txt file
12. ✅ Audit all meta descriptions

---

## Success Metrics

Track these to measure LLM SEO success:
- **Direct traffic from AI chatbots** (check referrers)
- **Branded searches** (people searching "Oway AI")
- **Time on site** (comprehensive content = longer sessions)
- **Citation frequency** (manual checks in LLMs)
- **Backlinks from authority sites**

---

## Tools & Resources

- **Schema.org generator**: https://technicalseo.com/tools/schema-markup-generator/
- **Check LLM citations**: Manually search in ChatGPT, Claude, Perplexity
- **Structured data testing**: Google Rich Results Test
- **Content ideas**: Answer questions from Reddit, Quora about "email management" and "AI assistants"
