---
homepage: true
layout: product
order: 5
title: DeliverCon
description: DeliverCon is the annual gathering for delivery managers in and around the public sector.
startButton:
  href: "#"
  text: Sign up for our Mailing list
image:
  src: /assets/images/Picture 1.png
  alt: Delivery Con 2023 Mission Patch with the date 22 February 2023 on it.
aside:
  title: Aside
  content: | 
    A small portion of content that is **indirectly** related to the main content.
related:
  sections:
    - title: Related links
      items:
        - text: Layouts
          href: ../../layouts
        - text: Options
          href: ../../options
      subsections:
        - title: Eleventy documentation
          items:
          - text: Front matter data
            href: https://www.11ty.dev/docs/data-frontmatter/
---
{% from "govuk/components/inset-text/macro.njk" import govukInsetText %}

{{ govukInsetText({
  text: "DeliverCon will return in early 2024. Make sure to follow us on Twitter <a>@DeliverConUK</a> and watch <a>#DeliveryMgnt</a> on X-Gov Slack"
}) }}

Lorem ipsum dolor sit amet. Aut autem facere qui corporis omnis aut sint eaque At iste voluptate ut possimus dolore ex commodi laudantium. In numquam voluptate est iste rerum 33 adipisci quae ab iusto accusantium et quod internos vel repellat quae et accusantium fuga. 

Check out our <a href="blogs">Blogs</a>, <a href="events">Past Events</a> or <a href="resources">Resources</a>.