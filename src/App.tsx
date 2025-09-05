import { useState } from 'react'
import './App.css'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

function App() {

  return (
    <>
      <Card>
        <CardHeader>
          <div className='flex'>
            <img
              src='/image-daniel.jpg'
            />
            <p>Daniel Clifford Verified Graduate</p>
          </div>
        </CardHeader>
        <CardContent>
          <div>
            <p>
              I received a job offer mid-course, and the subjects 
              I learned were current, if not more so, in the company 
              I joined. I honestly feel I got every penny’s worth.
            </p>
          </div>
          <p>Card Content</p>
        </CardContent>
        
      </Card>
    </>
  )
}

export default App
