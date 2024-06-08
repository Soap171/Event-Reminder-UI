import { Button, Checkbox, Label, TextInput } from "flowbite-react";

export function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen w-full p-4 sm:p-6 lg:p-8 bg-gray-100 dark:bg-gray-900">
      <form className="w-full max-w-md bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="email"
              value="Your email"
              className="text-gray-900 dark:text-gray-300"
            />
          </div>
          <TextInput
            id="email"
            type="email"
            placeholder="your123@gmail.com"
            required
            className="w-full bg-gray-50 dark:bg-gray-700 dark:text-gray-200"
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="password"
              value="Your password"
              className="text-gray-900 dark:text-gray-300"
            />
          </div>
          <TextInput
            id="password"
            type="password"
            required
            className="w-full bg-gray-50 dark:bg-gray-700 dark:text-gray-200"
          />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox
            id="remember"
            className="text-gray-900 dark:text-blue-500"
          />
          <Label
            htmlFor="remember"
            className="text-gray-900 dark:text-gray-300"
          >
            Remember me
          </Label>
        </div>
        <Button
          type="submit"
          className="w-full bg-blue-600 dark:bg-blue-500 dark:text-gray-200"
        >
          Login
        </Button>
      </form>
    </div>
  );
}

export default Login;
