import React from 'react'

import { ExclamationIcon } from '@heroicons/react/outline'
import { BellIcon, DotsHorizontalIcon, ChevronDownIcon} from '@heroicons/react/solid'

import Input from '../components/teton/Input'
import FormControl from '../components/teton/FormControl'
import FormLabel from '../components/teton/FormLabel'
import FormHelperText from '../components/teton/FormHelperText'
import FormErrorMeassage from '../components/teton/FormErrorMessage'

import Showcase from '../components/site/Showcase'

function FormsPage() {
  return (
    <span class="space-y-6">
      <span class='prose'>  
        <h1>Forms</h1>
      </span>
      <Showcase 
        title="Form Control"
        class="w-full p-4 m-auto space-y-6"
        component={
          <>
            <FormControl>
              <FormLabel>Email address</FormLabel>
              <Input type='email'/>
              <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>
          </>
        } 
        syntaxBlock={`<FormControl />`} 
      />
      <Showcase 
        title="Form Control in Error State"
        class="w-full p-4 m-auto space-y-6"
        component={
          <>
            <FormControl>
              <FormLabel>Email address</FormLabel>
              <Input type='email' invalid/>
              <FormErrorMeassage>Error, please try again...</FormErrorMeassage>
            </FormControl>
          </>
        } 
        syntaxBlock={`<FormControl />`} 
      />
      <Showcase 
        title="Input" 
        class="w-full p-4 m-auto space-y-6"
        component={
          <>
            <Input type="text" placeholder="Invalied input" invalid />
            <Input type="text" id="firstName" name="firstName" size="xs" placeholder="This is placeholder text" />
            <Input placeholder="This is placeholder text" size="sm" />
            <Input placeholder="disabled" size="md" disabled />
            <Input placeholder="This is placeholder text" size="lg" required />
            <Input placeholder="This is placeholder text" size="xl" />
          </>
        } 
        syntaxBlock={`<Input />`} 
      />
    </span>
  )
}

export default FormsPage;