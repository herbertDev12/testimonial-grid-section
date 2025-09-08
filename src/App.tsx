
import './App.css'
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"

function App() {

  return (
    <div className='bg-gray-100 min-h-screen p-8'>
      {/* Grid container with responsive columns */}
      <div className='grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto'>
        
        {/* Daniel - spans 2 columns */}
        <Card className='bg-purple-600 text-white md:col-span-2'>
          <CardHeader>
            <div className='flex items-center space-x-4'>
              <img
                src='/image-daniel.jpg'
                className='rounded-full w-10 h-10'
              />
              <div>
                <p className='font-semibold'>Daniel Clifford</p>
                <p className='text-sm opacity-80'>Verified Graduate</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className='font-bold text-xl'>
              I received a job offer mid-course, and the subjects 
              I learned were current, if not more so, in the company 
              I joined. I honestly feel I got every penny's worth.
            </p>
            <p className='mt-4 opacity-90'>
              "I was an EMT for many years before I joined the bootcamp. I've been looking to make a 
              transition and have heard some people who had an amazing experience here. I signed up 
              for the free intro course and found it incredibly fun! I enrolled shortly thereafter. 
              The next 12 weeks was the best - and most grueling - time of my life. Since completing 
              the course, I've successfully switched careers, working as a Software Engineer at a VR startup."
            </p>
          </CardContent>
        </Card>

        {/* Jonathan - spans 1 column */}
        <Card className='bg-gray-600 text-white'>
          <CardHeader>
            <div className='flex items-center space-x-4'>
              <img
                src='/image-jonathan.jpg'
                className='rounded-full w-10 h-10'
              />
              <div>
                <p className='font-semibold'>Jonathan Walters</p>
                <p className='text-sm opacity-80'>Verified Graduate</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className='font-bold text-xl'>
              The team was very supportive and kept me motivated
            </p>
            <p className='mt-4 opacity-90'>
              "I started as a total newbie with virtually no coding skills. I now work as a mobile engineer 
              for a big company. This was one of the best investments I've made in myself."
            </p>
          </CardContent>
        </Card>

        {/* Kira - spans 1 column and 2 rows */}
        <Card className='md:row-span-2'>
          <CardHeader>
            <div className='flex items-center space-x-4'>
              <img
                src='/image-kira.jpg'
                className='rounded-full w-10 h-10'
              />
              <div>
                <p className='font-semibold'>Kira Whittle</p>
                <p className='text-sm opacity-80'>Verified Graduate</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className='font-bold text-xl'>
              Such a life-changing experience. Highly recommended!
            </p>
            <p className='mt-4 opacity-90'>
              "Before joining the bootcamp, I've never written a line of code. I needed some structure from 
              professionals who can help me learn programming step by step. I was encouraged to enroll by a former 
              student of theirs who can only say wonderful things about the program. The entire curriculum and staff 
              did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team 
              project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial 
              could ever have. In fact, I've often referred to it during interviews as an example of my development 
              experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 
              100% recommend!"
            </p>
          </CardContent>
        </Card>

        {/* Jeanette - spans 1 column */}
        <Card>
          <CardHeader>
            <div className='flex items-center space-x-4'>
              <img
                src='/image-jeanette.jpg'
                className='rounded-full w-10 h-10'
              />
              <div>
                <p className='font-semibold'>Jeanette Harmon</p>
                <p className='text-sm opacity-80'>Verified Graduate</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className='font-bold text-xl'>
              An overall wonderful and rewarding experience
            </p>
            <p className='mt-4 opacity-90'>
              "Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living 
              while doing something I love."
            </p>
          </CardContent>
        </Card>

        {/* Patrick - spans 2 columns */}
        <Card className='bg-gray-800 text-white md:col-span-2'>
          <CardHeader>
            <div className='flex items-center space-x-4'>
              <img
                src='/image-patrick.jpg'
                className='rounded-full w-10 h-10'
              />
              <div>
                <p className='font-semibold'>Patrick Abrams</p>
                <p className='text-sm opacity-80'>Verified Graduate</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className='font-bold text-xl'>
              Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and 
              learning from their experiences was easy.
            </p>
            <p className='mt-4 opacity-90'>
              "The staff seem genuinely concerned about my progress which I find really refreshing. The program 
              gave me the confidence necessary to be able to go out in the world and present myself as a capable 
              junior developer. The standard is above the rest. You will get the personal attention you need from 
              an incredible community of smart and amazing people."
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default App