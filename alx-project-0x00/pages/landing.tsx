import Card from '@/components/Card';
import Button from '@/components/Button';

const Landing: React.FC = () => {
    return (
        <div>
            <h1 className=" text-xl font-extralight">Landing Page</h1>
            <Card />
            <Button title="Small Rounded" styles="sm rounded-sm" />
            <Button title="Medium Rounded" styles="md rounded-md" />
            <Button title="Large Rounded" styles="lg rounded-lg" />
            <Button title="Large Rounded" styles="lg rounded-full" />
            
        </div>
    )
}

export default Landing;