'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { motion } from "framer-motion"

export default function BiodataPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FDF7E9] to-[#F5E5C3] text-stone-800">
      {/* Header */}
      <motion.header 
        className="bg-[#8B4513]/10 py-6 text-center relative overflow-hidden"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-[#8B4513] relative z-10">॥ श्री स्वामी समर्थ ॥</h1>
        <motion.div 
          className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
        />
      </motion.header>

      <main className="container mx-auto px-4 py-12">
        <motion.div 
          className="grid gap-8 md:grid-cols-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Image Section */}
          <Card className="overflow-hidden shadow-lg">
            <CardContent className="p-0">
              <motion.div 
                className="relative aspect-[3/4] overflow-hidden"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo-botAZw1tNAhQRMN3R5usR6JUq97nSU.jpeg"
                  alt="कुमार लिच्छल शिवाजी फुलारी"
                  className="object-cover"
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                />
              </motion.div>
            </CardContent>
          </Card>

          {/* Personal Information */}
          <Card className="bg-white/80 backdrop-blur shadow-lg">
            <CardContent className="p-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h2 className="mb-6 text-3xl font-semibold text-[#8B4513]">वैयक्तिक माहिती</h2>
                <div className="space-y-4">
                  <InfoRow label="नाव" value="कुमार निखिल शिवाजी फुलारी" />
                  <InfoRow label="जन्म दिनांक" value="१३ डिसेंबर २००२" />
                  <InfoRow label="जन्म वार व वेळ" value="शुक्रवार दुपारी ०२.३० वा." />
                  <InfoRow label="जन्म ठिकाण" value="शिराढोण, ता. जिल्हा अहमदनगर" />
                  <InfoRow label="रास" value="मीन" />
                  <InfoRow label="रसनाव" value="थालेश" />
                  <InfoRow label="नक्षत्र" value="ऊत्तरा भाद्रपदा" />
                  <InfoRow label="जात" value="हिंदू, माळी" />
                  <InfoRow label="शिक्षण" value="H.S.C., Agriculture Diploma" />
                  <InfoRow label="उंची" value="६ फूट" />
                </div>
              </motion.div>

              <Separator className="my-8" />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h2 className="mb-6 text-3xl font-semibold text-[#8B4513]">कौटुंबिक माहिती</h2>
                <div className="space-y-4">
                  <InfoRow label="वडील" value="श्री. शिवाजी हरिभाऊ फुलारी" />
                  <InfoRow label="आई" value="सौ. अश्विनी शिवाजी फुलारी" />
                  <InfoRow label="आजोबा" value="कै. हरिभाऊ नारायण फुलारी" />
                  <InfoRow label="बहीण" value="कुमारी अमृता शिवाजी फुलारी" />
                  <InfoRow label="मामा" value="श्री. संतोष किसान शिंदे" />
                </div>

                <div className="mt-6">
                  <p className="text-sm text-muted-foreground">
                    (मु. पो. घारगाव ता. श्रीगोंदा, जिल्हा अहमदनगर)
                  </p>
                </div>
              </motion.div>

              <Separator className="my-8" />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <h3 className="mb-4 text-xl font-semibold text-[#8B4513]">इतर नातेवाईक:</h3>
                <p>आनंदकर, व्यापारी, शिंदे, भुजबळ, बारवकर</p>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </main>
    </div>
  )
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="font-medium text-[#8B4513]">{label}:</div>
      <div className="col-span-2">{value}</div>
    </div>
  )
}


