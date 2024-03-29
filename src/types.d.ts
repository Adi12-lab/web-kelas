type Member =  {
    id: string;
    name: string;
    slug: string;
    origin: string;
    description: string;
    dream: string;
    image: string;
    background_image: string;
    moto: string;
    instagram: string;
    phone: string
}

type NewMember = Omit<Member, "id">

type Event = {
    id: string
    name: string,
    year: number
}

type NewEvent = Omit<Event, "id">

type Gallery = {
    id: string,
    image: string,
    eventId: string,
}


type EventAndGallery = Event & { Gallery: Gallery[] };

type NewGallery = Omit<Gallery, "id">

type Chat = {
    id: string,
    message: string,
    createdAt: Date
}
export type NewChat = Pick<Chat, "message">

interface Toast {
    isActive: boolean,
    type: 'success' | 'error' | null,
    message: string | null,
    change: (type: 'success' | 'error' | null, message: string | null) => void,
}

type User = {
    username: string,
    password: string
}

export type { Member, Toast, User, NewMember, Event, NewEvent, Gallery, NewGallery, EventAndGallery, Chat}