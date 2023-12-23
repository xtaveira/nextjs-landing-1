import Features from '@/components/Features'
import Hero from '@/components/Hero'
import Text from '@/components/Text'
import React from 'react'

const Home = () => {
  return (
    <main>
      {/* Capture reader's attention first */}
      <Hero />

      {/* Describe the problem your header has and how you will adress it */}
      <Text />

      {/* Sell you points, Features + Benefits */}
      <Features />

      {/* Testimonials from your service */}
      <section>Social Proof</section>

      {/* CTA is the easy possibiliry for readers to engage */}
      <section>Call to Action</section>

    </main>
  )
}

export default Home