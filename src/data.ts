import { Service, Testimonial, GalleryItem, BenefitItem } from "./types";

export const servicesData: Service[] = [
  {
    id: "zumba",
    title: "Zumba",
    description: "High-energy dance fitness workouts that blend Latin and international rhythms. Perfect for burning calories, toning up, and boosting your mood in a party-like atmosphere.",
    benefit: "Burns up to 600 calories/hr • Promotes heart health • Boosts mood",
    iconName: "Flame",
    tag: "Cardio & Dance"
  },
  {
    id: "aerobics",
    title: "Aerobics",
    description: "Dynamic cardiovascular workouts set to fast-paced music. Designed to improve rhythm, endurance, co-ordination, and strengthen the core with low-impact options.",
    benefit: "Improves lung capacity • Lowers stress • Elevates stamina",
    iconName: "Activity",
    tag: "Cardio & Dance"
  },
  {
    id: "crossfit",
    title: "Crossfit",
    description: "High-intensity functional training designed to challenge every muscle. Mixes high-intensity interval training, plyometrics, and functional gymnastics.",
    benefit: "Builds absolute power • Increases metabolic rate • Boosts agility",
    iconName: "Zap",
    tag: "strength & Conditioning"
  },
  {
    id: "dance-fitness",
    title: "Dance Fitness",
    description: "Ditch the dull routine with stylized choreography and modern, empowering music. Express yourself while burning major calories and building full-body rhythm.",
    benefit: "Release positive endorphins • Full body toning • Easy to follow",
    iconName: "Music",
    tag: "Cardio & Dance"
  },
  {
    id: "yoga-classes",
    title: "Yoga Classes",
    description: "A sanctuary of peace. Align your posture, improve flexibility, and practice deep breathing. Ideal for reducing mental stress and cultivating mindful connection.",
    benefit: "Relieves muscle tightness • Calms nervous system • Imparts deep focus",
    iconName: "Sparkles",
    tag: "Mind & Body"
  },
  {
    id: "pilates",
    title: "Pilates",
    description: "Focused conditioning to build a bulletproof core, improve core engagement, alignment, and long lean muscle tone. Gentle on joints, intense for deep stabilizers.",
    benefit: "Core power & stability • Postural correction • Injury prevention",
    iconName: "Shield",
    tag: "Mind & Body"
  },
  {
    id: "weight-training",
    title: "Weight Training",
    description: "Strength training in a comfortable, clean workspace. Master dumbbell routines, standard squats, and machine exercises to sculpt your target areas and boost metabolism.",
    benefit: "Shapes physique • Accelerates fat loss • Strengthens bone density",
    iconName: "Dumbbell",
    tag: "strength & Conditioning"
  },
  {
    id: "personal-training",
    title: "Personal Training",
    description: "Get undivided individual support from Lucknow's best female-focused trainers. Includes physical assessments, custom-tailored progressions, and weekly check-ins.",
    benefit: "Rapid goal execution • Safest technique mastery • Maximum accountability",
    iconName: "UserCheck",
    tag: "Personal Coaching"
  },
  {
    id: "private-lessons",
    title: "Private Lessons",
    description: "One-on-one sessions specializing in fitness disciplines like Zumba, Yoga correction, or high-performance CrossFit. Tailored to your time, pacing, and comfort.",
    benefit: "Flexible booking • Customized workout speed • Highly focused results",
    iconName: "Compass",
    tag: "Personal Coaching"
  },
  {
    id: "nutrition-consulting",
    title: "Nutrition Consulting",
    description: "Real health happens beyond the gym floors. Receive personalized, realistic meal structures focused on clean local diets, macros, and sustainable habit formation.",
    benefit: "Boosts day-long energy • Accelerates weight targets • Promotes gut health",
    iconName: "Apple",
    tag: "Personal Coaching"
  }
];

export const benefitsData: BenefitItem[] = [
  {
    id: "ladies-only",
    title: "Ladies Only Environment",
    description: "Enjoy your workout journey in an 100% judgment-free zone. Experience unparalleled safety, comfort, and positive vibes alongside fellow sisters of all ages.",
    iconName: "Heart"
  },
  {
    id: "certified-trainers",
    title: "Certified Trainers",
    description: "Our exceptional female physical coaches have years of specific experience in women's anatomy, weight loss journeys, prenatal/postnatal fitness, and sculpting.",
    iconName: "Award"
  },
  {
    id: "modern-equipment",
    title: "Modern Equipment",
    description: "Equipped with state-of-the-art bio-mechanically optimal cardio treadmills, cross trainers, free weights, and isolated functional strength machinery.",
    iconName: "Sliders"
  },
  {
    id: "positive-community",
    title: "Positive Community",
    description: "Make life-long fitness friends. Share fitness milestones, join local community challenges, and cheer each other on in a highly supportive social circle.",
    iconName: "Users"
  },
  {
    id: "flexible-programs",
    title: "Flexible Programs",
    description: "With early morning, afternoon, and late evening classes, find specific timelines matching your career, domestic, or collegiate calendars.",
    iconName: "Calendar"
  },
  {
    id: "personalized-guidance",
    title: "Personalized Guidance",
    description: "Every member is treated with unique focus. We guide you from introductory body assessments through monthly modifications to ensure you thrive.",
    iconName: "TrendingUp"
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: "test-1",
    name: "Aarti Verma",
    role: "Zumba & Weight Training Member",
    rating: 5,
    comment: "Music and lighting create a perfect workout vibe. As a beginner, I was nervous, but the energetic atmosphere and supporting gym ladies made it feel like home!",
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: "test-2",
    name: "Pooja Srivastava",
    role: "Regular CrossFit Enthusiast",
    rating: 5,
    comment: "Modern equipment, enough space, and a very motivating environment. Everfit Ladies Gym is the absolute safest place in Lucknow for women to lift and build serious power.",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: "test-3",
    name: "Rinki Gupta",
    role: "Yoga & Aerobics Member",
    rating: 5,
    comment: "The owner is very polite and give proper service. Trainers pay full attention to your postures and modify exercises dynamically. Highly recommend to women of all age brackets!",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: "test-4",
    name: "Dr. Shalini Rai",
    role: "Personal Training Member",
    rating: 5,
    comment: "Excellent trainers who design workouts suited to busy professional schedules. The clean sanitization and friendly environment make it worth every single rupee.",
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop"
  }
];

export const galleryData: GalleryItem[] = [
  {
    id: "gal-1",
    url: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=600&auto=format&fit=crop",
    tag: "Zumba",
    title: "High Energy Zumba Class"
  },
  {
    id: "gal-2",
    url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&auto=format&fit=crop",
    tag: "Yoga",
    title: "Sanctuary Yoga Poses"
  },
  {
    id: "gal-3",
    url: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop",
    tag: "Gym Environment",
    title: "Bright & Equipped Studio"
  },
  {
    id: "gal-4",
    url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop",
    tag: "Crossfit",
    title: "Empowered CrossFit Training"
  },
  {
    id: "gal-5",
    url: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=600&auto=format&fit=crop",
    tag: "Gym Environment",
    title: "Core Conditioning Area"
  },
  {
    id: "gal-6",
    url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=600&auto=format&fit=crop",
    tag: "Crossfit",
    title: "One-on-One Dumbbell Sculpting"
  }
];
