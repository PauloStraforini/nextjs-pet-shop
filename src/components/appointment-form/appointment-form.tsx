'use client';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { z } from 'zod'
import { Form, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const AppointmentFormSchema = z.object({
    tutorName: z.string().min(3, 'O nome do tutor e obrigatorio'),
    petName: z.string().min(3, 'O nome do pet e obrigatorio'),
    phone: z.string().min(11, 'O telefone e obrigatorio'),
    Description: z.string().min(3, 'A descricao e obrigatorio')
})

type AppointmentFormValues = z.infer<typeof AppointmentFormSchema>

export const AppointmentForm = () => {
    const form = useForm<AppointmentFormValues>({
        resolver: zodResolver(AppointmentFormSchema),
        defaultValues: {
            tutorName: '',
            petName: '',
            phone: '',
            Description: ''
        }
    })

    const onSubmit = (data: AppointmentFormValues) => {
        console.log(data)
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="brand">Novo Agendamento</Button>
            </DialogTrigger>

            <DialogContent variant="appointment" overlayVariant="blurred" showCloseButton>
                <DialogHeader>
                    <DialogTitle size="modal">Agende um atendimento</DialogTitle>
                    <DialogDescription size="modal">
                        Preencha os dados do cliente para realizar o agendamento:
                    </DialogDescription>
                </DialogHeader>

                <Form {...form} >
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <input {...form.register('tutorName')} type='text' />

                        <Button type="submit">
                            Salvar
                        </Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
};