"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Hero from "@/components/layout/hero"
import { CalendarDatePickerModal } from "@/components/layout/calendar-date-picker-modal"

export default function HeroWithEvents() {
  const [isEventsOpen, setIsEventsOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState(() => new Date())

  const handleConfirmDate = (date: Date) => {
    setSelectedDate(date)
  }

  const handleClose = () => {
    setIsEventsOpen(false)
  }

  return (
    <>
      <Hero
        selectedDate={selectedDate}
        onSelectDate={setSelectedDate}
        onSelectDateClick={() => setIsEventsOpen(true)}
      />
      <AnimatePresence>
        {isEventsOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md bg-black/10"
            onClick={handleClose}
            role="dialog"
            aria-modal="true"
            aria-label="Community Events Calendar"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="bg-white w-full max-w-3xl max-h-[85vh] overflow-hidden flex flex-col rounded-lg shadow-xl border border-slate-200"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
            >
              <CalendarDatePickerModal
                selectedDate={selectedDate}
                onSelectDate={handleConfirmDate}
                onClose={handleClose}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
