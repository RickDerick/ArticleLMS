import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

function ContactsList() {
  const contacts = [
    {
      id: 1,
      name: "Kate Massey",
      phone: "555-690-0096",
      email: "brock.williams@example.org",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      name: "Floyd Gilbert",
      phone: "555-411-0110",
      email: "warner@sky@yahoo.com",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      name: "Matilda Saunders",
      phone: "555-370-9640",
      email: "stephenson.karen@hotmail.com",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 4,
      name: "Kevin Atkins",
      phone: "555-027-0362",
      email: "adam.hayes@hotmail.com",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 5,
      name: "Herman Ball",
      phone: "555-453-9378",
      email: "rashad.stokes@example.org",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 6,
      name: "Hannah Manning",
      phone: "555-253-9349",
      email: "hannah.pope@example.net",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <div className="w-72 border-l border-gray-200 bg-white p-4 hidden lg:block overflow-y-auto">
      <div className="space-y-4">
        {contacts.map((contact) => (
          <div key={contact.id} className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src={contact.avatar || "/placeholder.svg"} alt={contact.name} />
              <AvatarFallback>{contact.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <h4 className="text-sm font-medium">{contact.name}</h4>
              <p className="text-xs text-muted-foreground">{contact.phone}</p>
              <p className="text-xs text-muted-foreground">{contact.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ContactsList
