// import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
// import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
// import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
// import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
// import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";

// const testimonials = [
//   {
//     name: "Alex Turner",
//     position: "Marketing Manager @ TechStartups",
//     text: "Alex was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
//     avatar: memojiAvatar1,
//   },
//   {
//     name: "Olivia Green",
//     position: "Head of Design @ GreenLeaf",
//     text: "Working with Alex was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.",
//     avatar: memojiAvatar2,
//   },
//   {
//     name: "Daniel White",
//     position: "CEO @ InnovateCo",
//     text: "Alex's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
//     avatar: memojiAvatar3,
//   },
//   {
//     name: "Emily Carter",
//     position: "Product Manager @ GlobalTech",
//     text: "Alex is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers.",
//     avatar: memojiAvatar4,
//   },
//   {
//     name: "Michael Brown",
//     position: "Director of IT @ MegaCorp",
//     text: "Alex's work on our website has been nothing short of exceptional. He's a talented developer who is also a great communicator. We highly recommend him.",
//     avatar: memojiAvatar5,
//   },
// ];

// export const TestimonialsSection = () => {
//   return <div>Testimonials Section</div>;
// };

// components/Testimonials.js
'use client'
import { motion } from 'framer-motion'

const TestimonialCard = ({ name, testimonial, image }) => (
  <motion.div 
    className="bg-gray-800 p-6 rounded-lg shadow-lg"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    <div className="flex items-center mb-4">
      <img src={image} alt={name} className="w-12 h-12 rounded-full mr-4" />
      <h3 className="font-semibold">{name}</h3>
    </div>
    <p className="text-gray-400">{testimonial}</p>
  </motion.div>
)

export default function Testimonials() {
  const testimonials = [
    {
      name: "John Doe",
      testimonial: "Working with this designer was a pleasure. The attention to detail and creativity brought our vision to life.",
      image: "/john.jpg"
    },
    {
      name: "Jane Smith",
      testimonial: "The website redesign exceeded our expectations. It's not only beautiful but also highly functional and user-friendly.",
      image: "/jane.jpg"
    }
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">What Clients Say about Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}